for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.addEventListener("click", function () {
        this.style.background = white;
    })
    document.getElementById("container").appendChild(square);
}


