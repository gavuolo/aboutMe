function abrirLinkedin(){
    window.open('https://www.linkedin.com/in/gabriela-vuolo-oliveira-390189193/', '_blank')
}

function abrirGitHub(){
    window.open('https://github.com/gavuolo','_blank')
}

function abrirLattes(){
    window.open('http://lattes.cnpq.br/8480933251214361','_blank')
}
/*biomedicina*/
function verFotos(){
    let modal = document.querySelector('.window-hidden')
    modal.classList.remove('hidden')
    modal.classList.add('fadeIn')
}

function fecharJanela(elemento){
    let modal = document.querySelector('.window-hidden');
    modal.classList.add('hidden')
        console.log(elemento.parentNode)
}
