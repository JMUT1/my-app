import { registerImg } from "./lazy";

const max = 122;
const min = 1;

const random = () => Math.floor(Math.random() * (max - min) + min);

const createImgNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";

  const image = document.createElement("img");
  image.className = "mx-auto";
  image.width = "320";
  //dataset help us to catch the data not to show it
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    // Wrapper that creates the gray in the image
  const imageWrapper = document.createElement("div");
  imageWrapper.className = "bg-gray-300";
  imageWrapper.style.minHeight = "100px";
  imageWrapper.style.display = "inline-block";

  imageWrapper.appendChild(image);
  container.appendChild(imageWrapper);

  appendedImages++;
  printLog();

  return container;
};

const mountNode = document.getElementById("images");

//ADD IMAGE BUTTON
const addButton = document.getElementById("addBtn");
const addImage = () => {
  const newImage = createImgNode();
  mountNode.append(newImage);
  registerImg(newImage);
};

//CLEAN IMAGE BUTTON
const cleanButton = document.getElementById("cleanBtn");

const cleanImages = ()=>{
    console.log(mountNode.childNodes);

    [...mountNode.childNodes].forEach(child => {
        child.remove();
    })
}

addButton.addEventListener("click", addImage);
cleanButton.addEventListener("click", cleanImages);
