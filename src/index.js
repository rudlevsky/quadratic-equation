module.exports = function solveEquation(equation) {
  let spltStr = equation.split(' ');
  let first = +spltStr[0];
  let second = +(spltStr[3] + spltStr[4]);
  let third = +(spltStr[7] + spltStr[8]);

  let discrim = Math.sqrt(Math.pow(second,2) - 4*first*third);
  let mas = [];
  if(discrim > 0){
      mas.push(Math.round((-1)*second + discrim)/(2*first));
      mas.push(Math.round(((-1)*second - discrim))/(2*first));
  } else if (discrim == 0){
      mas.push(Math.round(((-1)*second)/(2*first)));
      mas.push(Math.round(((-1)*second)/(2*first)));
  }
  
  return mas.sort((a,b) => a - b);
}

