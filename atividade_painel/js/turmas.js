'use strict';





let aulas = [
    {
        "id": 1300,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "EMP-NBM-03",
        "instrutor": "Joel Herbert Barbosa Silva",
        "unidade_curricular": "Noções Básicas para Maquinistas",
        "ambiente": "VTRIA-3-SALA-3004",
        "chave": null
    },
    {
        "id": 1280,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "UMO-MBMM-03",
        "instrutor": "Thadeu Vasconcelos da Silva Gomes",
        "unidade_curricular": "Mecânica Básica de Motores de Motocicletas",
        "ambiente": "VTRIA-EXTER-EXTERNO",
        "chave": null
    },
    {
        "id":  1326,
        "data_hora_inicio": "2024-08-29T18:00:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "EMP-NBM-03",
        "instrutor": "Joel Silva",
        "unidade_curricular": "Noções Básicas para Maquinistas",
        "ambiente": "VTRIA-3-Sala-3004",
        "chave": null
    },
    {
        "id": 1300,
        "data_hora_inicio": "2024-08-29T18:00:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "UMO-MBMM-03",
        "instrutor": "Thadeu Gomes",
        "unidade_curricular": "Mecânica de Motocicletas",
        "ambiente": "VTRIA-3-Externo",
        "chave": null
    },
    {
        "id": 1280,
        "data_hora_inicio": "2024-08-29T18:30:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "HTC-MEC-4-92",
        "instrutor": "Afonso Cordeiro",
        "unidade_curricular": "VTRIA-3-Desenho Mecânico",
        "ambiente": "Lab-3003",
        "chave": null
    },
    {
        "id":  1326,
        "data_hora_inicio": "2024-08-29T18:30:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "HTC-ATI-2-48",
        "instrutor": "Aminta Galaviz",
        "unidade_curricular": "Circuitos Microcontrolados",
        "ambiente": "VTRIA-3-Lab-5022",
        "chave": null
    },
    {
        "id": 1300,
        "data_hora_inicio": "2024-08-29T18:30:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "HTC-ELT-3-56",
        "instrutor": "Daniel Seidel",
        "unidade_curricular": "Manutenção Industrial",
        "ambiente": "VTRIA-3-Sala-5103",
        "chave": null
    },
    {
        "id": 1280,
        "data_hora_inicio": "2024-08-29T18:30:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "HTC-AUT-1-27",
        "instrutor": "Daniel Lemos",
        "unidade_curricular": "Processos Automotivos",
        "ambiente": "VTRIA-3-Lab-3020",
        "chave": null
    },
    {
        "id":  1326,
        "data_hora_inicio": "2024-08-29T18:30:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "EMP-NR10I-21",
        "instrutor": "Fabiano Paula",
        "unidade_curricular": "NR10 – Segurança em Instalações e Serviços com Eletricidade",
        "ambiente": "VTRIA-3-Lab-4003",
        "chave": null
    },
    {
        "id": 1300,
        "data_hora_inicio": "2024-08-29T18:30:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "COM-MECMOT-06",
        "instrutor": "Fabricio Plaster",
        "unidade_curricular": "Mecânica de Motocicletas",
        "ambiente": "VTRIA-3-Lab-3015",
        "chave": null
    },
    {
        "id": 1280,
        "data_hora_inicio": "2024-08-29T18:30:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "HTC-DDS-2-19",
        "instrutor": "Gregory Silva",
        "unidade_curricular": "Banco de Dados",
        "ambiente": "VTRIA-3-Lab-5106",
        "chave": null
    },
    {
        "id":  1326,
        "data_hora_inicio": "2024-08-29T18:30:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "HTC-MEC-4-93",
        "instrutor": "Jaco Romanha",
        "unidade_curricular": "Projeto Mecânico",
        "ambiente": "VTRIA-3-Sala-3005",
        "chave": null
    },
    {
        "id": 1300,
        "data_hora_inicio": "2024-08-29T18:30:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "HTC-AUT-3-24",
        "instrutor": "João Junior",
        "unidade_curricular": "Manutenção de Veículos",
        "ambiente": "VTRIA-3-Sala-3022",
        "chave": null
    },
    {
        "id": 1280,
        "data_hora_inicio": "2024-08-29T18:30:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "HTC-AUT-4-23",
        "instrutor": "Jonas Silva",
        "unidade_curricular": "Inspeção Veicular",
        "ambiente": "VTRIA-3-Lab-3018",
        "chave": null
    },
    {
        "id":  1326,
        "data_hora_inicio": "2024-08-29T18:30:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "COM-CEI-31",
        "instrutor": "Julio Pagio",
        "unidade_curricular": "Comunicações Industriais",
        "ambiente": "VTRIA-3-Sala-4007",
        "chave": null
    },
    {
        "id": 1300,
        "data_hora_inicio": "2024-08-29T18:30:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "HTC-ATI-3-45",
        "instrutor": "Karlomagno Stedile",
        "unidade_curricular": "Elementos de Controle",
        "ambiente": "VTRIA-3-Lab-5118",
        "chave": null
    },
    {
        "id": 1280,
        "data_hora_inicio": "2024-08-29T18:30:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "HTC-MEC-1-98",
        "instrutor": "Lucas Correa",
        "unidade_curricular": "Fundamentos de Mecânica",
        "ambiente": "VTRIA-3-Sala-3002",
        "chave": null
    },
    {
        "id":  1326,
        "data_hora_inicio": "2024-08-29T18:30:00.000Z",
        "data_hora_fim": "2024-08-29T22:00:00.000Z",
        "turma": "HTC-DDS-1-20",
        "instrutor": "Mykael Deolindo",
        "unidade_curricular": "Fundamentos Aplicados",
        "ambiente": "VTRIA-3-Lab-5108",
        "chave": null
    },
]

function abreviaData(dataHora) {
    const agora = new Date(dataHora);
    return agora.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit' });
}



let tabela = document.getElementById('tabela');
let axibir = '';
let isBlue = false; // Variável para alternar as cores

for (let aula of aulas) {
    //Abreviando nome dos instrutores
    let arrayNome = aula.instrutor.split(' ');
    let primeiroUltimo = arrayNome[0] + ' ' + arrayNome[arrayNome.length - 1];
    console.log(primeiroUltimo);

    // Abreviando o nome da unidade curicular
    let pieces = aula.unidade_curricular.split(' '); //split pega uma string e separa em arrays de string
    pieces.splice(-2, 2); // splice remove elemento de um array
    let abrev = aula.unidade_curricular.substring(0, 4); // retorna um pedaço de uma string

    //Abreviando ambiente
    let salas = aula.ambiente.split('-');
    salas.splice(0, 2);
    let ambiente = salas.join('-');

    // Alterna a cor da linha e a cor da letra
    let corLinha = isBlue ? 'style="background-color: #3d8ac9; color: #FFFFFF;"' : 'style="background-color: #FFFFFF; color: #000000;"';
    isBlue = !isBlue; // Inverte a cor para a próxima linha


    axibir += '<tr ' + corLinha + '>';
    axibir += '<td ="padding;">' + abreviaData(aula.data_hora_inicio) + '</td>';
    axibir += '<td ="padding;">' + abreviaData(aula.data_hora_fim) + '</td>';
    axibir += '<td ="padding;">' + aula.turma + '</td>';
    axibir += '<td ="padding;">' + primeiroUltimo + '</td>';
    axibir += '<td ="padding;">' + abrev + '. ' + pieces.pop() + '</td>';
    axibir += '<td ="padding;">' + ambiente + '</td>';
    axibir += '</tr>';
}

tabela.innerHTML += axibir;