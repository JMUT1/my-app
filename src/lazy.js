const isIntersecting = (entry) =>{
    return entry.isIntersecting
};

const loadImg = (entry)=>{
    const container =  entry.target;
    const image = container.firstChild;
    const url = image.dataset.src;
    //load image
    image.src = url

    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(loadImg)
});

export const registerImg = (image) => {
    observer.observe(image)
}