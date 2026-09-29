 const titulo = document.getElementById('titulo')
 const paragrafo = document.getElementById('paragrafo')
 const caixa = document.getElementById('caixa')
 const lista = document.getElementById('lista')
 const contadorTexto = document.getElementById('contador')

 const bntTexto = document.getElementById('btnTexto')
 const btnCor = document.getElementById('btnCor')
 const btnFundo = document.getElementById('btnFundo')
 const btnDestaque = document.getElementById('btnDestaque')
 const btnFonte = document.getElementById('btnFonte')
 const btnAdicionar = document.getElementById('btnAdicionar')
 const btnRemover = document.getElementById('btnRemover')
 const btnContador = document.getElementById('btnContador')

 bntTexto.addEventListener('click', function(){
    paragrafo.textContent = 'Texto alterado'
 })
 btnCor.addEventListener('click', function(){
    paragrafo.style.color = 'blue'
 })
 btnFundo.addEventListener('click',function(){
    caixa.style.backgroundColor = '#ffe066'
 })
 btnDestaque.addEventListener('click',function(){
     caixa.classList.toggle('destaque')
 })
btnFonte.addEventListener('click',function(){
    titulo.style.fontSize = '40px'
    titulo.style.color = 'yellow'
    titulo.style.fontWeight = 'bold'
})
btnAdicionar.addEventListener('click', function(){
    const notoItem = document.createElement('li')
    novoItem.texteContent = 'Item' + (lista.children.length + 1)
    lista.appendChild(novoItem)
})
btnRemover.addEventListener('click', function(){
    if (lista.lastElementChild) {
        lista.lastElementChild.remove()
    }
})
let cliques = 0

btnContador.addEventListener('click',function(){
    cliques += 1
    contadorTexto.textContent = cliques 
})