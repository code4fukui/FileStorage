export class FileStorage {
  constructor(basedir) {
    if (!basedir.endsWith("/")) basedir += "/";
    this.basedir = basedir;
  }
  async save(path, bin) {
    if (path.indexOf("..") >= 0 || path.indexOf("//") >= 0 || path[0] == "/") {
      throw new Error("illegal path");
    }
    const n = path.lastIndexOf("/");
    if (n >= 0) {
      const dir = path.substring(0, n);
      await Deno.mkdir(this.basedir + dir, { recursive: true });
    }
    await Deno.writeFile(this.basedir + path, bin);
    return true;
  }
  async load(path) {
    return await Deno.readFile(this.basedir + path);
  }
}
