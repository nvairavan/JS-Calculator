function myFunction() {
  var x, y, z, oper;
  x = prompt("Type a first number");
  y = prompt("Type a second number");
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
  document.getElementById("txtnum1").value = x;
  document.getElementById("txtnum2").value = y;
  document.getElementById("txtresult").value = z;
}