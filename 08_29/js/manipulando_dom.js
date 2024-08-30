'use strict';

let html = document.getElementById('saudacao');

console.log(html);

// DOM (Document Object Model) é a estrutura da página HTML.
// O DOM permite que linguagens interajam com a página

html.innerHTML='<h1>Olá Mundo </h1>';

let alunos = [
    {nome: 'Gabriel', sobrenome: 'Resende Pereira'},
    {nome: 'Giampaolo', sobrenome: 'Resende Pereira'},
    {nome: 'Gustavo', sobrenome: 'Dias Santana'}

];

let tabela = document.getElementById('tabela');

let exibir = '';

for(let aluno of alunos){
    exibir += '<tr>'
    exibir += '<td>'+ aluno.nome + '</td>'
    exibir += '<td>'+ aluno.sobrenome + '</td>'
    exibir += '</tr>'
};

tabela.innerHTML += exibir;

console.log(tabela);