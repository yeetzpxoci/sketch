for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    document.getElementById("container").appendChild(square);
    square.addEventListener("onmouseover", function () {
        alert();
    })
}


