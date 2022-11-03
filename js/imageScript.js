const fetchImages = async () => {
  const response = await fetch("../imageList.txt");
  const images = await response.text();
  return images;
};

async function main() {
  const images = await fetchImages();
  const imageList = images.split("\n");

  imageList.forEach((element) => {
    const elements = element.split(".");
    const newImage = document.createElement("img");
    newImage.setAttribute("class", "image");
    newImage.setAttribute("loading", "lazy");
    newImage.setAttribute(
      "src",
      "./images/thumbnails/" + elements[0] + "-TN.JPG"
    );
    document.getElementById("gallery").append(newImage);
  });
}
main();
