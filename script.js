var names = {"1954f":["Mary", "Elizabeth", "Sarah"], "1955f":["Jane", "Susan", "Clare"]};
function getName(input) {
  var item = names[input][Math.floor(Math.random()*3)];
  alert(item);
}  
