var names = {"1954f":["Mary", "Elizabeth", "Sarah"], "1955f":["Jane", "Susan", "Clare"]};

var input = prompt("please enter gender and year");
var item = names[input][Math.floor(Math.random()*3)];
alert(item);
