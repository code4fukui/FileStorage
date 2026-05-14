# FileStorage

Deno向けのシンプルなファイルストレージライブラリです。

## 特徴
- バイナリデータ、テキスト、JSONの保存と読み込み
- ファイル保存時にディレクトリを自動作成
- ディレクトリトラバーサル攻撃を防止

## 要件
このライブラリには、モダンなJavaScriptおよびTypeScriptランタイムであるDenoが必要です。

## 使い方

```js
import { FileStorage } from "https://code4fukui.github.io/FileStorage/FileStorage.js";

const bin = new TextEncoder().encode("abc");
const fs = new FileStorage("data");
const path = "data/test/abc.txt";
await fs.save(path, bin);
const bin2 = await fs.load(path);
```

## ライセンス
MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
