const fetchImages = async () => {
  const response = await fetch("../imageList.txt");
  const images = await response.text();
  return images;
};

async function main() {
  const images = await fetchImages();
  const imageList = images.split("\n");

  imageList.forEach((element) => {
    const imageName = element.split(".")[0];
    /** @type HTMLAnchorElement */
    const newAnchor = document.createElement("a");
    newAnchor.href = "/image.html?image=" + imageName + ".JPG";
    newAnchor.classList.add("image-container");

    const newImage = document.createElement("img");

    newImage.classList.add("image");
    newImage.loading = "lazy";
    newImage.alt = imageName.replace("-TN", "").replace(/_/g, " ");
    newImage.src = "./images/thumbnails/" + imageName + "-TN.JPG";

    newAnchor.appendChild(newImage);
    document.getElementById("gallery").append(newAnchor);
  });
}
main();

const clickMenu = document
  .querySelector(".menu-icon")
  .addEventListener("click", () => {
    console.log("click");

    const dropMenu = document.querySelector(".drop-menu");
    console.log(dropMenu.style.display);
    if (dropMenu.style.display == "grid") {
      dropMenu.style.display = "none";
    } else {
      dropMenu.style.display = "grid";
    }
  });
