import { Request } from "express";
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import * as dotenv from 'dotenv' 
// import crypto from 'crypto';
import sharp from 'sharp';
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

dotenv.config();

console.log("Req Received for Upload Controller");

// const accessKey = process.env.accessKey;
// const secretAccessKey = process.env.SECRET_ACCESS_KEY;
// const bucketRegion = process.env.BUCKET_REGION;
// const bucketName = process.env.BUCKET_NAME;

const accessKey = 'AKIA4C5UR2PMKV2ZI2EO';
const secretAccessKey = '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';
const bucketRegion = 'ca-central-1';
const bucketName='bidforgood';

// const randomImageName = (bytes = 32)=>{
//     crypto.randomBytes(bytes).toString('hex');
// }

const s3 = new S3Client({
    credentials:{
        accessKeyId: accessKey,
        secretAccessKey: secretAccessKey,
    },
    region:bucketRegion
});

const uploadImageToAWS = async(req: Request) => {
    const newBuffer = await sharp(req.file?.buffer).resize({height:1920, width:1080, fit: 'contain'}).toBuffer();
    // const currentImageName = req.file?.originalname + randomImageName() + " ";
    const params = {
        Bucket:bucketName,
        Key: req.file?.originalname,
        Body: newBuffer,
        ContentType: req.file?.mimetype,
    };
    const getObjectParams = {
        Bucket: bucketName,
        Key: req.file?.originalname,
    };
    const getObjCommand = new GetObjectCommand(getObjectParams);
    const command = new PutObjectCommand(params);
    let imgResponse = null;
    try{
        await s3.send(command);
        const url = await getSignedUrl(s3, getObjCommand, {expiresIn: 604800});
        imgResponse = Object.assign({},{url},req.file);
    }catch(e){
        console.log("Error Occured in AWS \n",e);
        imgResponse = null;
    }
    return imgResponse;
};

export default{
    uploadImageToAWS,
}