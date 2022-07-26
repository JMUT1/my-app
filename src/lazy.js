const isIntersecting = (entry) =>{
    return entry.isIntersecting
};

const action = (entry)=>{
    const nodo = entry.target;

    console.log("HOLAA");

    observer.unobserve(nodo)
}

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(action)
});

export const registerImg = (image) => {
    observer.observe(image)
}