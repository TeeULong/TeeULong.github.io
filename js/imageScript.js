async function fetchImages() {
    const response = await fetch('../imageList.txt');
    const images = await response.text();
    return images;
  }
  fetchImages().then(images => {
    
    const imageList = images.split("\n")

    for(i = 0; i <imageList.length ;i++){
        let newImage = document.createElement('img');
        newImage.setAttribute("class","image");
        newImage.setAttribute("loading","lazy");
        newImage.setAttribute("src","./images/compressed-images/" + imageList[i])
        document.getElementById("gallery").append(newImage)
    }; 
  });

  
  
//   function getMeta(url){   
//     const img = new Image();
//     img.addEventListener("load", function() {
//         console.log(this.naturalWidth +' '+ this.naturalHeight)
        

//     });
//     img.src = url;
// }
