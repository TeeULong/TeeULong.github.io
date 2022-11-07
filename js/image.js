const main = async () => {
  const params = new URLSearchParams(window.location.search);
  const imageName = params.get("image");

  const newImage = document.createElement("img");

  newImage.classList.add("image");
  newImage.alt = imageName.replace(/_/g, " ").replace(".JPG", "");

  newImage.src = "./images/compressed-images/" + imageName;

  document.querySelector(".image-container").append(newImage);

  document.querySelector("h2.text").innerText = newImage.alt;
};
main();

const clickMenu = document
  .querySelector(".menu-icon")
  .addEventListener("click", () => {
    console.log("click");

    const dropMenu = document.querySelector(".drop-menu");
    dropMenu.classList.toggle("click");
  });