for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.addEventListener("mouseover", function () {
        alert("hello!");
    })
    document.getElementById("container").appendChild(square);
}


