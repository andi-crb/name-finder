var names = {"1954f":["Mary", "Elizabeth", "Sarah"], "1955f":["Jane", "Susan", "Clare"]};
function getName(year, gender) {
  var input = year + gender;
  var item = names[input][Math.floor(Math.random()*3)];
  alert(item);
}  
