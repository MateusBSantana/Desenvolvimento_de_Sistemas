'use strict';

let primeiro_array = new Array(5); // Declarando primeiro Array
primeiro_array[0] = 5;
primeiro_array[1] = true;
primeiro_array[2] = 'Maça';
console.log(primeiro_array);

let segunda_array = []; // Criando um array vazio 
console.log(segunda_array);

let terceiro_array = [5, true, 5.8, 'pessoa']; // Criando um Array já preenchido
console.log(terceiro_array);

let quarto_array = new Array(1,true,5.8,'animal');
console.log(quarto_array);

let matriz = [[0,1], [0,2], [true,false]];
console.log(matriz[0]);
console.log(matriz[2][1]);


let cores = ['amarelo', 'azul', 'branco'];
console.log(cores.toString()); // Método toString converte para String separada por virgulas
console.log(cores.join('|')); // Método toString converte para String e permite escolher o separador
console.log(cores.concat(matriz,quarto_array)); //O modo concat permite a junção de um ou mais Arrays

cores.push('preto', 'verde');// O método push envia novas posições para o final
console.log(cores);


console.log(cores.pop()); // pop() remove e retorna a ultima posição de um Array
console.log(cores);

let primeiraCor = cores.shift(); //shift() remove e retorna a primeira posição de um Array
console.log(primeiraCor);
console.log(cores);

cores.unshift('roxo' , 'turqueza', 'marrom');// O método push envia novas posições para o inicio
console.log(cores);

let fatia = cores.splice(1,2); //O método splice() remove e retona um pedaço do Array
console.log(cores);
console.log(fatia);

let nome = 'João de Souza Bharboza'; // Uma String é um Array de caracteres
console.log(nome[nome.length-1]);

let arrayNome = nome.split(' ');
console.log(arrayNome);

/*let primeiroUltimo = arrayNome[0] + ' ' +  arrayNome[arrayNome.length-1];
let alternativo = arrayNome.shift() + ' ' + arrayNome.pop();

console.log(primeiroUltimo);
console.log(alternativo);*/


















