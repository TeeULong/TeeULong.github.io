import sharp from "sharp";
import { existsSync, mkdirSync, readdirSync } from "fs";
import { exit } from "process";

const args = process.argv;

if (args.length != 3) exit();

const directory = "./images/thumbnails/";
if (!existsSync(directory)) {
  mkdirSync(directory);
}
const arg = parseInt(args[2]);

readdirSync("./images/compressed-images/").forEach((file) => {
  const filename = file.split(".", 2);

  if (filename.length === 2) {
    sharp("./images/compressed-images/" + file)
      .resize(arg, arg)
      .extract({ width: arg, height: arg, left: 0, top: 0 })
      .toFile(directory + filename[0] + "-TN" + ".JPG");
  }
});
