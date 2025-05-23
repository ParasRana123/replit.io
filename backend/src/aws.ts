import { S3 } from "aws-sdk"
import fs from "fs"
import path from "path"
import dotenv from "dotenv"
dotenv.config();

const s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    endpoint: process.env.S3_ENDPOINT
})

export const fetchS3folder = async (key: string , localPath: string): Promise<void> => {
    try {
        const params = {
            Bucket: process.env.S3_BUCKET,
            Prefix: key
        }
    }
}