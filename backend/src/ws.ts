import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";
import { copyS3Folder , saveToS3 } from "./aws"
import path from "path";
import { httpstatus } from "aws-sdk/clients/glacier";

export function initWs(httpServer: HttpServer) {
    const io = new Server(httpServer , {
        cors: {
            origin: "*",
            methods: ["GET" , "POST"]
        },
    });
}