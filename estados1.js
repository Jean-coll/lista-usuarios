// import listaDeEstados from './estados.js';
const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

async function fetchEstados(){
    const response = await fetch(url)
    const data = await response.json()

    let tagUl = document.getElementById('lista-estados');

    for(let i = 0; i < data.length; i++){
        tagUl.innerHTML += "<li>Estado: " + data[i].nome + "<br>" + " Região: " + data[i].regiao.nome + "<br><br>" + "</li>";
    }
}
fetchEstados()