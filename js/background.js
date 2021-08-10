const images = [
    "01.png",
    "02.png!d",
    "03.jpg!d",
    "04.jpg!d",
    "05.jpg!d",
]

const backgroundImage = images[Math.floor(Math.random() * images.length)];
const bgimage = document.createElement("img");
bgimage.classList.add('bgImage');
bgimage.src = `img/${backgroundImage}`;

document.body.appendChild(bgimage);