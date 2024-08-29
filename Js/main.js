//Criar a função para coletar o CEP
function Coletar() {
    let input = document.querySelector('.input-cep').value
    console.log(input)
    Dados(input)
    
}

//função para consumir api

async function Dados(input) {
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
   
    ExibirDados(dados)
    console.log(dados)
}

function ExibirDados(dados) {
    document.querySelector('.estado').value = dados.uf
    document.querySelector('.cidade').value = dados.localidade
    document.querySelector('.endereco').value = dados.logradouro
    document.querySelector('.ddd').value = dados.ddd
}
function Limpar(){
    document.querySelector('.estado').value = ''
    document.querySelector('.cidade').value = ''
    document.querySelector('.endereco').value = ''
    document.querySelector('.ddd').value = ''
    document.querySelector('.input-cep').value = ''
}
