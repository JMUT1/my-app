import { registerImg } from "./lazy";

const max = 122;
const min = 1;

const random =  () => Math.floor(Math.random() * (max - min) + min)

const createImgNode = ()=>{

    const container = document.createElement("div")
    container.className = "p-4";

    const image = document.createElement("img");
    image.className = "mx-auto";
    image.width = "320"
    image.src = `https://randomfox.ca/images/${random()}.jpg`

    container.appendChild (image);

    return container;
};

const mountNode = document.getElementById("images");

const addButton = document.querySelector("button");
const addImage = () => {
    const newImage = createImgNode();
    mountNode.append(newImage);
    registerImg(newImage)
};

addButton.addEventListener("click", addImage)