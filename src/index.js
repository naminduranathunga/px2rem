const { default: Calculator } = require("./Calculator");
import "./App.css";

document.addEventListener('DOMContentLoaded', () => {
    var Calc = new Calculator();
    document.getElementById('app').appendChild(Calc.render());
});