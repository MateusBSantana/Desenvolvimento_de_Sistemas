let peso = prompt('Digite o peso: ');
let altura = prompt('Digite o altura: ');

//(peso / ( altura * 2)

let imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

console.log(imc);

if(imc < 18.5){
    alert('Magraza');
} else if(imc < 24.5){
    alert('Normal');
} else if(imc < 29.9){
    alert('Sobrepeso');
} else if(imc < 39.9){
    alert('Obesidade');
} else{
    alert('Obesidade Grave');
}
