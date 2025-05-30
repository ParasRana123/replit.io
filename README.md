# Cloud-Based Online Code Editor

An interactive, cloud-powered coding platform that enables users to write, execute, and manage code in real-time across multiple programming languages — all from the browser. Inspired by platforms like Replit, this tool supports persistent cloud-based project storage, a terminal emulator, and dynamic session handling.

## Features

- Select from multiple programming languages to start coding instantly
- Preloaded boilerplate files fetched from `AWS S3` for quick project initialization
- Unique `replID` assigned to each session for persistent storage and project access
- Fully functional in-browser terminal powered by `node-pty`
- Real-time terminal output streamed using `WebSockets`
- Isolated sandbox environments for each user to ensure security and scalability

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Cloud Storage**: AWS S3
- **Real-Time Execution**: node-pty, WebSockets
- **Session Handling**: replID-based session persistence

## Project Structure

```bash
├── backend/            # all the backend code
│   ├── src/           
│   │     ├── aws.ts    # code for uploading files to S3 
│   │     ├── fs.ts     # all the fetch file and directory logic
│   │     ├── http.ts   # creating the http server  
│   │     ├── pty.ts    # all the logic for integrating terminal
│   │     ├── ws.ts     # all the websockets logic here
│   │     └── index.ts  # main backend routes here 
│   │ 
├── frontend/           # all the frontend code 
│   ├── src/        
│   │     ├── components/ # all components for frontend          
│   │     └── App.tsx     # main frontend routes here        
└── README.md
```

## How It Works?

1. **User Initialization**
   - User selects a programming language and is assigned a unique `replID`.
   - The server fetches boilerplate files from AWS S3 based on the selected language.

2. **Editor & Terminal**
   - The code editor loads pre-initialized files into the browser.
   - A terminal is initialized using `node-pty`, spawning a shell per user.

3. **Real-Time Execution**
   - Commands entered in the terminal are sent to the backend using WebSockets.
   - Output from the command is streamed back live to the frontend terminal window.

4. **Persistent Storage**
   - Edited files are saved back to AWS S3 with the user’s `replID`.
   - When the user returns, the same files are reloaded from S3 for seamless continuity.

5. **Session Isolation**
   - Each user's session is sandboxed to ensure security and prevent interference.
   - Cleanup logic ensures idle sessions are terminated gracefully.

## Installation

1. **Clone the Repository**

```bash
git clone [repository-url]
cd replit.io
```

2. **Install the Bcakend dependencies**

```bash
cd backend
npm install
```

3. **Install the Frontend dependencies**

```bash
cd frontend
npm install
```

4. **Get your AWS creditionals by navigatinating to the official website and the creating a bucket inside the R2 Object Store section.**

```bash
Official website: 
https://www.cloudflare.com/en-in/
```

5. **Create a .env file with your AWS S3 credentials in the backend folder**

```bash
cd backend
```

The creditionals should be shored something like this in the `.env` file.

```bash
PORT=
S3_BUCKET=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
S3_ENDPOINT=
```

> **Note**: You can take inspiration from the `.env.example` file  created in the `backend directory`.

6. **Start the Backend server**

```bash
cd backend
npm run dev
```

7. **Start the Frontend application**

```bash
cd frontend
npm run dev
```

## Future Integrations

- Integrating Container Orchestration using Dockers and Kubernetes.
- Each file system along with the language is assigned a separate container which is isolated from the main system. 
- Integrating services like like Ingress controller and Pods provided by the kubernetes cluster.
- Integrating advanced technologies like Nix that replit actually uses along with caching dependencies.


## Contributing

We welcome contributions from the community! Whether you're interested in improving features, fixing bugs, or adding new functionality, your input is valuable. Feel free to reach out to us with your ideas and suggestions.

## License
This project is licensed under the MIT License - see the LICENSE file for details.