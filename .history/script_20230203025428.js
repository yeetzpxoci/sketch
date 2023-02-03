for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.addEventListener("mouseover", function () {
        this.style.backgroundColor = "black";
    })
    document.getElementById("container").appendChild(square);
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
    document.getElementById("container").style.height = squareCount;
    document.getElementById("container").style.width = squareCount;
    for (let i = 0; i < numberOfSquares ** 2; i++) {
        const square = document.createElement("div");
        square.style.height = length;
        square.style.width = length;
        square.addEventListener("mouseover", function () {
            this.style.backgroundColor = "black";
        })
        document.getElementById("container").appendChild(square);
    }
}


