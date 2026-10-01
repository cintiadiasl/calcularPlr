// Calcular a PLR
export function calcularPlr(senioridade, salario) {
  if (senioridade === "senior") {
    return salario * 2 
  } else {
    return salario * 1
  }
}

//console.log(calcularPlr('senior', 14000))
//console.log(calcularPlr('pleno', 7000))
//console.log(calcularPlr('junior', 3500))

