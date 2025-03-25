function Changecolor () {
    const colors = ["white", "blue", "red", "green", "#01ffff"];
    const RandomColor = colors[Math.floor(Math.random() * colors.length)];


    document.body.style.backgroundColor = RandomColor;

}
