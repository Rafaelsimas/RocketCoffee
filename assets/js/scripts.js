function abrirMenu(){
   const botaoAbrir = document.querySelector('.abrir')
   const botaoFechar = document.querySelector('.fechar')
   botaoAbrir.classList.add('escondido')
   botaoFechar.classList.remove('escondido')
   habilitarOpcoes()
}

function fecharMenu(){
   const botaoAbrir = document.querySelector('.abrir')
   const botaoFechar = document.querySelector('.fechar')
   botaoAbrir.classList.remove('escondido')
   botaoFechar.classList.add('escondido')
   desabilitarOpcoes()
}

function habilitarOpcoes(){
    const menu = document.querySelector('.menu')
    menu.classList.remove('escondido')
}


function desabilitarOpcoes(){
    const menu = document.querySelector('.menu')
    menu.classList.add('escondido')
}
