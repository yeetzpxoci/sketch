for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.addEventListener("mouseover", function () {
        this.style.backgroundColor = "white";
    })
    document.getElementById("container").appendChild(square);
}

function squarePerSide() {
    let numberOfSquares = prompt("How many squares do you want on a side?");
}


