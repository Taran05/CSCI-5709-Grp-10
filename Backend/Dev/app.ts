import express from "express";
import bodyParser from "body-parser";
import http from "http";

const app = express();
const server: http.Server = http.createServer(app);

//api configration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//api middlewares

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
