module.exports = function solveEquation(equation) {
  let a, b, c, discriminant;
  let result = [];
  while (equation.indexOf(" ") != -1) {
    let i = equation.indexOf(" ");
    equation = equation.slice(0,i) + equation.slice(i+1);
  }
  equation = equation.split("*x^2");
  a = parseInt(equation[0]);
  equation = equation[1].split("*x");
  b = parseInt(equation[0]);
  c = parseInt(equation[1]);
  discriminant = Math.pow(b, 2) - 4*a*c;
  if (discriminant > 0) {
    result.push(Math.round((-b - Math.sqrt(discriminant)) / (2*a)));
    result.push(Math.round((-b + Math.sqrt(discriminant)) / (2*a)));  
    if (result[0] > result[1]){
      let temp = result[0];
      result[0] = result[1];
      result[1] = temp;
    }
  }
  return result;
}
