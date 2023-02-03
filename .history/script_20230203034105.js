var hold = false;
var colorMode = "bw";

document.addEventListener("mousedown", function () {
    hold = true;
})

document.addEventListener("mouseup", function () {
    hold = false;
})

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.addEventListener("mouseover", function () {
        if (hold) {
            if (colorMode == "bw") {
                this.style.backgroundColor = black;  
            }

            if (colorMode = "color") {
                this.style.backgroundColor = getRandomColor();   
            }
        }
    })
    document.getElementById("container").appendChild(square);
}

function getRandomColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r},${g},${b})`; // Collect all to a css color string
}

function squarePerSide() {
    let numberOfSquares = prompt("How many squares do you want on a side?");
    while (numberOfSquares <= 0 || numberOfSquares > 100) {
        numberOfSquares = prompt("Please a number between 0 and 100");
        if (numberOfSquares == null) {
            return;
        }
    }
    document.getElementById("container").textContent = ""; // remove all existing squares
    const length = 480 / numberOfSquares;
    for (let i = 0; i < numberOfSquares ** 2; i++) {
        const square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.height = length.toString() + "px";
        square.style.width = length.toString() + "px";
        square.addEventListener("mouseover", function () {
            if (hold) {
                this.style.backgroundColor = "black";
            }
        })
        document.getElementById("container").appendChild(square);
    }
}


