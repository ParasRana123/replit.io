# Cloud-Based Online Code Editor

An interactive, cloud-powered coding platform that enables users to write, execute, and manage code in real-time across multiple programming languages — all from the browser. Inspired by platforms like Replit, this tool supports persistent cloud-based project storage, a terminal emulator, and dynamic session handling.

## Features

- Select from multiple programming languages to start coding instantly
- Preloaded boilerplate files fetched from AWS S3 for quick project initialization
- Unique `replID` assigned to each session for persistent storage and project access
- Fully functional in-browser terminal powered by `node-pty`
- Real-time terminal output streamed using WebSockets
- Isolated sandbox environments for each user to ensure security and scalability

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Cloud Storage**: AWS S3
- **Real-Time Execution**: node-pty, WebSockets
- **Session Handling**: replID-based session persistence

## Project Structure

```bash
├── vercel-upload-service/     # Code for uploading files to S3 
│   ├── src/           
│   │     ├── aws.ts         
│   │     ├── file.ts     
│   │     ├── index.ts     
│   │     └── utils.ts   
├── vercel-deploy-service/    # Code for running the build command
│   ├── src/        
│   │     ├── aws.ts             
│   │     ├── index.ts            
│   │     └── utils.ts             
├── vercel-request-handler/   # Code for handling the requests
│   ├── src/        
│   │     ├── index.ts  
└── README.md
```

## Installation

1. **Clone the Repository**

```bash
git clone [repository-url]
cd vercel
```

2. **Install the Upload Service dependencies**

```bash
cd vercel-upload-service
npm install
```

3. **Install the Deploy Service dependencies**

```bash
cd vercel-deploy-service
npm install
```

4. **Install the Request Handler dependencies**

```bash
cd request-handler-service
npm install
```

5. **Install the Frontend dependencies**

```bash
cd frontend
npm install
```

6. **Create a `.env` file in all the three folders `vercel-upload-service`, `vercel-deploy-service` and `vercel-request-handler`**

    Navigate to these folders and create a `.env` using:
    ``` bash
    cd vercel-upload-service
    echo. > .env
    ```  

    ``` bash
    cd vercel-deploy-service
    echo. > .env
    ```

    ``` bash
    cd vercel-request-handler
    echo. > .env
    ```

7. **Start the vercel-upload-service server**

```bash
cd vercel-upload-service
npm run dev
```

8. **Start the vercel-deploy-service server**

```bash
cd vercel-dpeloy-service
npm run dev
```

9. **Start the vercel-request-handler server**

```bash
cd request-handler-service
npm run dev
```

10. **Start the frontend application**

```bash
cd frontend
npm run dev
```

## Contributing

We welcome contributions from the community! Whether you're interested in improving features, fixing bugs, or adding new functionality, your input is valuable. Feel free to reach out to us with your ideas and suggestions.

## License
This project is licensed under the MIT License - see the LICENSE file for details.