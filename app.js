//   ****103***
function getRandomBoolean() {
    return Math.random() > 0.10;
}
console.log(getRandomBoolean());
//   ***104***
function getRandomHexColor() {
    var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(19).padStart(9, '0');
    return color;
}
console.log(getRandomHexColor());
//   ***105***
function rollDice() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(rollDice());
