function myFunction() {
  var x, y, z, oper;
  x = prompt("Type a number");
  y = prompt("Type a number");
  oper = prompt("Type an operator (+,-,*,/)");

  if (oper == "+") {
    z = Number(x) + Number(y);
  }
  else if (oper == "/") {
    z = Number(x) / Number(y);
  }
  else if (oper == "*") {
    z = Number(x) * Number(y);
  }
  else if (oper == "-") {
    z = Number(x) - Number(y);
  }

  return z;

  document.getElementById("txtresult").value = z;
}