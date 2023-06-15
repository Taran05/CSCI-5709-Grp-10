import { Session } from "express-session";
import { Socket,Server } from "socket.io";
// import { Auction } from "../models/aunctionModel";
import { userBidDetailsModel } from "../models/userBidDetails";
import { Item } from "../models/itemModel";
// import { or } from "sequelize";
// import { sequelize } from "./database";
// import { Transaction } from "sequelize";


const addBidOnDB = async (itemId:Number,userId:Number,bidVal:Number,auctionId:Number)=>{

  console.log(userId)

  try{

    // await sequelize.transaction(async (transaction:Transaction) => {
      await userBidDetailsModel.create({
        itemId:itemId,
        auctionId:auctionId,
        isWinner:false,
        bidAmount:bidVal,
        userId:userId,
      })
      .then((data)=> {
        console.log("result="+data)
        // return;  
      })
      .catch((error) => {
        console.log("error"+error)
        // return;
      })
      // await transaction.commit();
      
  }
  catch{
    console.log("Failed");
  }  
}


const updateBidData = async (itemId:Number,userId:Number, bidVal :Number, io:Server, socket:Socket, auctionId:Number ) => {

  // Checking if the previous bid exist in auction ,
  // If yes then check the max value with newVal
  userBidDetailsModel.max("bidAmount",{
    where:{
      auctionId:auctionId
    }
  })
  .then(async (result)=>{
    if(result){
      
      const maxVal = result;

      // console.log(maxVal);
      
      //updateBidValue(itemId,bidVal);
      
      // Checking if the new Value is bigger than maxVal
      if(maxVal <bidVal){
        
        await addBidOnDB(itemId,userId,bidVal,auctionId);
        console.log("updated - 1");
        
        let info = {
          highestBid:bidVal 
        }

        io.emit('bidUpdate', info);
        // return 1;
        socket.emit('yourBidUpdate',info);
        socket.broadcast.emit("out","out bid");
  
      }
      else{
        console.log("new Value is smaller.");
        // return 0;
      }

    } 
    else{

      // If the value is does not exist then, it could be the first bid, 
      // so check inside the itemtable where startPrice is stored.

      await Item.findOne({
        where:{
          itemId:itemId
        },
        attributes: ["startPrice"],
        
      })
      .then(async (result)=>{
        
        console.log("worked = " + result);
        
        if(result){
          
          // Checking if startPrice is bigger than newVal than update the DB.
          let startPrice = result.dataValues.startPrice;

          console.log(startPrice);
          console.log(bidVal);
          
          if(startPrice < bidVal){
            
            console.log("updated - 1");
            
            await addBidOnDB(itemId,userId,bidVal,auctionId);
            
            let info = {
              highestBid:bidVal 
            }

            io.emit('bidUpdate', info);
            // io.emit('bidUpdate', info);
        
            socket.emit('yourBidUpdate',info);
            socket.broadcast.emit("out","out bid");
          
          }
          else{
            console.log("new Value is smaller.");
            return 0;
          }
        }
        else{
          console.log("Item not found.");
          return 0;
        }
      }).catch(()=>{
        console.log("fail"); 
        return 0;       
      })
    }
    io.emit("updateTopUserList");   
    console.log("successfull");
  })

}


export function initSocket(server: any): void {

  const originType = process.env.NODE_ENV
  
  let origin = "";

  if (originType == 'development'){
    origin = "http://localhost:5173"
  }
  else{
    origin = "http://csci5308vm5.research.cs.dal.ca:5173"
  }

    const io = new Server(server, {
        cors: {
          origin: origin,
          methods: ['GET', 'POST']
        }
      });


    io.on('connection', async (socket:Socket)=>{

    const session: Session = (socket.request as any).session;

      console.log("user just connected! - session = " + session);
    
      // const session = null;

      socket.on('placeBid',async (data) => {

        console.log(data.sessionId,data.bidVal);
        
        if(data.userId != null){

          await updateBidData(data.itemId,data.userId,data.bidVal,io,socket,data.auctionId);
          
            console.log("make Update on client");

        }
        else{
         console.log("null");

          socket.emit('login',"Please Login for to participate in auction");
        }
    
      });
    
      socket.on('disconnect', () => {
        console.log('User disconnected');
    
        });
    
    });
}