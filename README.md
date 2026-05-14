# FileStorage

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple file storage library for Deno.

## Features
- Save and load binary data, text, and JSON
- Automatically create directories when saving files
- Prevents directory traversal attacks

## Requirements
This library requires Deno, a modern JavaScript and TypeScript runtime.

## Usage

```js
import { FileStorage } from "https://code4fukui.github.io/FileStorage/FileStorage.js";

const bin = new TextEncoder().encode("abc");
const fs = new FileStorage("data");
const path = "data/test/abc.txt";
await fs.save(path, bin);
const bin2 = await fs.load(path);
```

## License
MIT License — see [LICENSE](LICENSE).