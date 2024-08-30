let nomes = [
    'Lahra Souza Goiabinha', 'Mateus Barboza Santana', 'Igor Stein dos Santos', 'Luiz Felipe Xavier Bizio', 
    'Vitor Ribeiro Fonseca', 'Valdineide Schunck', 'Maria'
];

let primeiroUltimo;

for(let i = 0; i < nomes.length; i++){
    let arrayNome = nomes[i].split(' ');
    
    if(arrayNome.length-1 == 0){
        primeiroUltimo =  arrayNome[0];
        console.log(primeiroUltimo);
    } else {
        primeiroUltimo =  arrayNome[0] + ' ' +  arrayNome[arrayNome.length-1];
        console.log(primeiroUltimo);
    }
};