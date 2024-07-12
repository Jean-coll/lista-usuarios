import listadeestados from './estados.js';

let tagUl = document.getElementById('lista-estados');

/*let estado =listadeestados[0];
tagUl .innerHTML=tagUl.innerHTML + "<li id= 'item-0'>Estado: " +estado.nome

let tagLi = document.getElementById('Item-0');

tagUl.addEventListener('click'),function(){
alert ("clicou na li");

});
*/




for (let i = 0; i < listadeestados.length; i++) {
    let estado = listadeestados[i];
        tagUl.innerHTML = tagUl.innerHTML + `<li id="item-${i}">Estado: ${estado.nome}, Região: ${estado.regiao.nome} </li>`;
}

    for (let i = 0; i < listadeestados.length; i++) {
        let tagLi = document.getElementById(`item-${i}`);
        tagLi.addEventListener('click',function(event){
            console.log(event.target.outerHTML);
        }) 
        };

        // tagUl.textcontent="conteudo de texto" // Renderiza tudo como texto puro
        // tagUl.innerHTML="<li>Estado: Acre, região: Norte</li>"//Renderiza tag HTML