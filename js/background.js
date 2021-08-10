const images = [
    "01.png",
    "02.jpeg",
    "03.jpeg",
    "04.jpeg",
    "05.jpeg",
    "06.jpeg",
]

const backgroundImage = images[Math.floor(Math.random() * images.length)];
const bgimage = document.createElement("img");
bgimage.classList.add('bgImage');
bgimage.src = `img/${backgroundImage}`;

document.body.appendChild(bgimage);