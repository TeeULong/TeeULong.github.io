const sharp = require("sharp");

const fs = require("fs");

let height = 1500;
let width = null;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`image width [default: null]: `, (width) => {
  if (!width) {
    this.width = width;
  }
});
readline.question(`image height [default: 1500]: `, (height) => {
  if (!height) {
    this.height = height;
    readline.close();
  }
});

fs.readdirSync("../images/original-images/").forEach((file) => {
  filename = file.split(".", 2);

  if (filename.length === 2) {
    sharp("../images/original-images/" + file)
      .composite([
        { input: "../images/watermark/logo.png", gravity: "southeast" },
      ])
      .resize(width, height)
      .webp({ lossless: true })
      .toFile("../images/compressed-images/" + filename[0] + ".webp")
      .then((data) => {})
      .catch((err) => {
        console.error;
      });
  }
});
