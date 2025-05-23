// Creating a pseudo-terminal process like bash that would feel like as if we are on the terminal

/*
The Terminal Manager should:
- Starts bash shells programmatically.
- Routes their output via a callback function.
- Allows sending commands to them (writing).
- Cleans up after them when no longer needed.
*/

import path from "path";
import { spawn, IPty } from "node-pty";
import { EventEmitter } from "events";

const SHELL = "bash";

export class TerminalManager {
  private sessions: { [id: string]: { terminal: IPty; replId: string } } = {};

  constructor() {
    this.sessions = {};
  }

  createPty(id: string, replId: string, onData: (data: string, id: number) => void) {
    const term = spawn(SHELL, [], {
      cols: 100,
      name: "xterm",
      cwd: path.join(__dirname, `../tmp/${replId}`)
    }) as IPty & EventEmitter;

    term.on("data", (data: string) => onData(data, term.pid));
    this.sessions[id] = {
      terminal: term,
      replId
    };
    term.on("exit", () => {
      delete this.sessions[term.pid];
    });
    return term;
  }

  write(terminalId: string, data: string) {
    this.sessions[terminalId]?.terminal.write(data);
  }

  clear(terminalId: string) {
    this.sessions[terminalId].terminal.kill();
    delete this.sessions[terminalId];
  }
}