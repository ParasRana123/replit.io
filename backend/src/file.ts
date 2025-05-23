/*
Here implemented functions to:
- Fetch the directory
- Redd the contents of the file inside the directory
- Save the file -> also over writes the contents of a file
*/

import fs from "fs";

interface File {
    type: "file" | "dir";
    name: string;
}

