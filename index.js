'use strict';

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('ddd').value = endereco.ddd;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
    
}

const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url)
    const endereco = await dados.json();

    if(endereco.hasOwnProperty('erro')) {
        document.getElementById('cep').value = 'CEP não encontrado';
    } else {
    preencherFormulario(endereco)
    }

}


document.getElementById('cep')
    .addEventListener('focusout', pesquisarCep);


