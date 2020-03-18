// Cálculo de IMC

const nome = "Carlos";
const sexo = "M";
const peso = 84;
const altura = 1.88;

const imc = peso / ( altura * altura );

if( imc >= 30 ) {
  const emagrecer = peso - ( 29.9 * ( altura * altura ) )
  console.log ( nome + " você está acima do peso! Você precisa emagrecer pelo menos " + parseInt(emagrecer) + " quilos." )
} else {
  console.log ( nome + " você não está acima do peso!" )
}