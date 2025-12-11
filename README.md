# FileStorage

## usage

```js
import { FileStorage } from "https://code4fukui.github.io/FileStorage/FileStorage.js";

const bin = new TextEncoder().encode("abc");
const fs = new FileStorage("data");
const path = "data/test/abc.txt";
await fs.save(path, bin);
const bin2 = await fs.load(path);
```
