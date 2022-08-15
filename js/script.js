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
    let modal = document.querySelector('.window-hidden');
    modal.classList.remove('hidden');
    modal.classList.add('fadeIn');

}
function fecharJanela(elemento){
    let modal = document.querySelector('.window-hidden');
    modal.classList.add('hidden');
}

//Crescente
function passarDireita(){
    let foto = document.querySelector('.pictures img')
    
    if(foto.alt === 'foto 01'){
        console.log('oi')
            foto.src = ''
            foto.src = `./images/photo02.jfif`
            foto.alt = ''
            foto.alt = `foto 02`
        }
    else if(foto.alt === 'foto 02'){
            foto.src = ''
            foto.src =`./images/photo03.jfif`
            foto.alt = ''
            foto.alt = `foto 03`
        }
        else if(foto.alt === 'foto 03'){
            foto.src = ''
            foto.src = `./images/photo04.jfif`
            foto.alt = ''
            foto.alt = `foto 04`
        }
        else if(foto.alt === 'foto 04'){
            foto.src = ''
            foto.src = `./images/photo05.jfif`
            foto.alt = ''
            foto.alt = `foto 05`
        }
        else if(foto.alt === 'foto 05'){
            foto.src = ''
            foto.src = `./images/photo01.jfif`
            foto.alt = ''
            foto.alt = `foto 01`
        }
}

//Decrescente
function passarEsquerda(){
    let foto = document.querySelector('.pictures img')
    if(foto.alt === 'foto 01'){
            foto.src = ''
            foto.src = `./images/photo05.jfif`
            foto.alt = ''
            foto.alt = `foto 05`
        }
    else if(foto.alt === 'foto 02'){
            foto.src = ''
            foto.src =`./images/photo01.jfif`
            foto.alt = ''
            foto.alt = `foto 01`
        }
        else if(foto.alt === 'foto 03'){
            foto.src = ''
            foto.src = `./images/photo02.jfif`
            foto.alt = ''
            foto.alt = `foto 02`
        }
        else if(foto.alt === 'foto 04'){
            foto.src = ''
            foto.src = `./images/photo03.jfif`
            foto.alt = ''
            foto.alt = `foto 03`
        }
        else if(foto.alt === 'foto 05'){
            foto.src = ''
            foto.src = `./images/photo04.jfif`
            foto.alt = ''
            foto.alt = `foto 04`
        }
}
