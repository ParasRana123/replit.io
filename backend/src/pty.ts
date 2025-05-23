// Creating a pseudo-terminal process like bash that would feel like as if we are on the terminal

/*
The Terminal Manager should:
- Starts bash shells programmatically.
- Routes their output via a callback function.
- Allows sending commands to them (writing).
- Cleans up after them when no longer needed.
*/

import path from "path";
import { fork , IPty } from "node-pty";

const SHELL = "bash";

export class TerminalManager {
    
}