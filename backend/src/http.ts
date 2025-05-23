import { Express } from "express"
import express from "express"
import { copyS3Folder } from "./aws"

export function initHttp(app: Express) {
    app.use(express.json());

    app.post("/project" , async (req , res) => {
        const { replId , language} = req.body;
        
        if(!replId) {
            res.status(400).send("Bad Request");
            return;
        }

        await copyS3Folder(`base/${language}`, `code/${replId}`);
        res.send("Project Created");
    });
}