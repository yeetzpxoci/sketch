for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.addEventListener("mouseover", function () {
        square.style.backgroundColor = "white";
        console.log(this)
    })
    document.getElementById("container").appendChild(square);
}


