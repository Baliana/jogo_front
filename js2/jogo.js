'use strict'

import {getJogo, getIdJogo,putJogo} from "./jogos.js"

// Cria e exibe um card com as informações de um jogo
function criarCard (jogo) {
    const container = document.getElementById('container')
    const card = document.createElement('div')    
    card.classList.add('card-jogo')
    card.innerHTML = `
            <img src="${jogo.foto}" alt="">
            <h2>${jogo.nome}</h2>
            <p>${jogo.celular}</p>
    `
    container.appendChild(card)
}

// Busca e exibe todos os jogos na tela
async function exibirJogos () {
    const container = document.getElementById('')
    const jogo = await getJogo()
    container.replaceChildren()
    jogo.forEach(criarCard)
}

// Faz a busca de jogo pelo nome ao pressionar "Enter"
async function exibirPesquisa (evento) {
    const container = document.getElementById('')
    if (evento.key == 'Enter') {
        const jogo = await getJogo(evento.target.value)
        container.replaceChildren()
        jogo.forEach(criarCard)
    }
    
}

// Mostra o formulário de cadastro de novo jogo
function cadastroJogo () {
    document.querySelector('main').className = 'form-show'
}

// Volta para a visualização dos cards de jogo
function voltarHome () {
    document.querySelector('main').className = 'card-show'
}

/////////////////////////////////////////// arrumar json na estrutura que tem que aparecer os jogos ///////////////////////////////
// Salva um novo contato preenchido no formulário e atualiza a lista
async function salvarJogo () {
    const contato = {
            "nome": document.getElementById('nome').value,
            "celular": document.getElementById('celular').value,
            "foto": document.getElementById('foto').value,
            "email": document.getElementById('email').value,
            "endereco": document.getElementById('endereco').value,
            "cidade": document.getElementById('cidade').value
        }

        if (await postContato(contato)){
            await exibirContatos()
            voltarHome()
            alert ('Cadastro realizado com sucesso!!!')
        }
        
}

exibirJogos()

// Adiciona evento para pesquisar jogo ao pressionar Enter
document.getElementById('pesquisar')
        .addEventListener('keydown',exibirPesquisa)

        // Adiciona evento para exibir o formulário de novo jogo
document.getElementById('novo-jogo')
        .addEventListener('click', cadastroJogo)

// Adiciona evento para cancelar e voltar à tela de contatos
document.getElementById('cancelar')
        .addEventListener('click', voltarHome)

         // Adiciona evento para salvar um novo contato
document.getElementById('salvar')
        .addEventListener('click', salvarJogo)