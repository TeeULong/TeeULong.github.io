import sharp from "sharp";
import { readdirSync } from "fs";
import { question } from "readline-sync";

const height = question(`image height [default: 1500]: `) || 1500;
const width = question(`image width [default: null]: `) || null;
console.log("w: " + width + " h: " + height);

readdirSync("./images/original-images/").forEach((file) => {
  const filename = file.split(".", 2);

  if (filename.length === 2) {
    sharp("./images/original-images/" + file)
      .composite([
        { input: "./images/watermark/logo.png", gravity: "southeast" },
      ])
      .rotate()
      .resize(width, height)
      .jpeg({ quality: 100 })
      .toFile("./images/compressed-images/" + filename[0] + ".JPG");
  }
});
