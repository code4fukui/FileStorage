import * as t from "https://deno.land/std/testing/asserts.ts";
import { FileStorage } from "./FileStorage.js";

Deno.test("simple", async () => {
  const bin = new TextEncoder().encode("abc");
  const fs = new FileStorage("temp");
  const path = "test/20251211/abc.txt";
  await fs.save(path, bin);
  const bin2 = await fs.load(path);
  t.assertEquals(bin, bin2);
});
Deno.test("illegalpath", async () => {
  const bin = new TextEncoder().encode("abc");
  const fs = new FileStorage("temp");
  await t.assertRejects(async () => await fs.save("/abc", bin));
  await t.assertRejects(async () => await fs.save("../abc", bin));
  await t.assertRejects(async () => await fs.save("//abc", bin));
});
