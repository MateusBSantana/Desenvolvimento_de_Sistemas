'use strict';

let ucs = [
    'NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.000)',
    'BANCO DE DADOS (CH: 120.000)'
];

for (let i = 0; i < ucs.length; i++){
    let pieces = ucs[i].split(' ');  // O Split pega uma String e separa em Arrays de String
    pieces.splice(-2,2); //Spice Remove elementos da String

    let abrev = pieces[0].substring(0,4);  // Retorna um pedaço de uma String
    console.log(abrev+ ". " +pieces.pop()); 
};

