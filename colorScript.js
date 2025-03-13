function Changecolor () {
    const colors = ["white", "blue", "red", "green"];
    const RandomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = RandomColor;

}
