import sharp from "sharp";
import { readdirSync } from "fs";
import { exit } from "process";

const args = process.argv;

if (args.length != 3) exit();

const arg = parseInt(args[2]);

console.log(args);

readdirSync("./images/original-images/").forEach((file) => {
  const filename = file.split(".", 2);

  if (filename.length === 2) {
    sharp("./images/compressed-images/" + file)
      .resize(arg, arg)
      .extract({ width: arg, height: arg, left: 0, top: 0 })
      .toFile("./images/thumbnails/" + filename[0] + "-TN" + ".JPG");
  }
});
