import { readdirSync, writeFile } from "fs";

const images = readdirSync("./images/compressed-images/")

writeFile("./imageList.txt", images.join("\n") , (error) => {if(error) console.error(error)})