"use strict";
function init() {
    modeButtonsInit(),
    squaresInit(),
    reset()
}
function squaresInit() {
    addEventListener(squares, "click", function() {
        var o = this.style.backgroundColor;
        o === pickedColor
            ? (displays[1].textContent = "Correct!", changeColors(squares, pickedColor), h1.style.backgroundColor = pickedColor, resetButton.textContent = "Play Again?")
            : (this.style.backgroundColor = "#232323", displays[1].textContent = "Try Again")
    })
}
function modeButtonsInit() {
    for (var o = 0; o < modeButtons.length; o++) 
        addEventListener([modeButtons[o]], "click", function() {
            removeClass([
                modeButtons[0], modeButtons[1]
            ], "selected"),
            addClass([this], "selected"),
            numSquares = this === modeButtons[0]
                ? 3
                : 6,
            reset()
        })
}
function reset() {
    colors = generateRandomColor(numSquares),
    pickedColor = pickColor(),
    displays[0].textContent = pickedColor,
    setStyles(squares, {display: "block"});
    for (var o = 0; o < squares.length; o++) 
        colors[o]
            ? removeClass([squares[o]], "hide")
            : addClass([squares[o]], "hide");
    colorUs(squares, "backgroundColor", colors),
    displays[1].textContent = "",
    h1.style.backgroundColor = "steelblue",
    resetButton.textContent = "New Colors"
}
function generateRandomColor(o) {
    for (var e = [], t = 0; t < o; t++) 
        e.push(randomColor());
    return e
}
function randomColor() {
    var o = Math.floor(256 * Math.random()),
        e = Math.floor(256 * Math.random()),
        t = Math.floor(256 * Math.random());
    return "rgb(" + o + ", " + t + ", " + e + ")"
}
function pickColor() {
    var o = Math.floor(Math.random() * colors.length);
    return colors[o]
}
var numSquares = 6,
    colors = [],
    pickedColor,
    displays = document.querySelectorAll("span"),
    squares = document.querySelectorAll(".square"),
    h1 = document.querySelector("h1"),
    resetButton = document.querySelectorAll("button")[0],
    modeButtons = document.querySelectorAll(".mode");
init(),
addEventListener([resetButton], "click", function() {
    reset()
});