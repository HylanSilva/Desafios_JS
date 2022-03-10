var B2F4 = parseInt(gets());

function calcularDias(QtdComida) {
  if (QtdComida <= 1.0) {
    return 0;
  }
  const eatFood = QtdComida / 2.0;
  
  return 1 + calcularDias(eatFood);
}

while (B2F4-- > 0) {
  const QtdComida = parseFloat(gets());
  const acabandoDias = calcularDias(QtdComida);
  
  console.log(acabandoDias, 'dias');
}