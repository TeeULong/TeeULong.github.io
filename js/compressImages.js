const sharp = require("sharp");

const fs = require("fs");
const { wrap } = require("module");

const readline = require("readline-sync");

const height = readline.question(`image height [default: 1500]: `) || 1500;
const width = readline.question(`image width [default: null]: `) || null;
console.log("fertig");
console.log("w: " + width + " h: " + height);

fs.readdirSync("../images/original-images/").forEach((file) => {
  filename = file.split(".", 2);

  if (filename.length === 2) {
    sharp("../images/original-images/" + file)
      .composite([
        { input: "../images/watermark/logo.png", gravity: "southeast" },
      ])
      .rotate()
      .resize(width, height)
      .webp({ lossless: true })
      .toFile("../images/compressed-images/" + filename[0] + ".webp")
      .then((data) => {})
      .catch((err) => {
        console.error;
      });
  }
});
