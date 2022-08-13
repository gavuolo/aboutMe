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
    let img = ['01','02','03','04','05']
    let img01 = document.querySelector('.pic-biomed-01')
    let img02 = document.querySelector('.pic-biomed-02') 
    let img03 = document.querySelector('.pic-biomed-03')
    let img04 = document.querySelector('.pic-biomed-04')
    let img05 = document.querySelector('.pic-biomed-05')

    let foto = document.querySelector('.pictures')
    let idFoto = document.querySelectorAll('.pictures img')
    console.log(foto.classList)
    console.log()

   /*for(i = 0 ; i < idFoto.length ; i++){

        if(idFoto[i].alt === 'foto 01'){
            img01.classList.add('hidden')
            img02.classList.remove('hidden')
        }
        else if(idFoto[i].alt === 'foto 02'){
            img02.classList.add('hidden')
            img03.classList.remove('hidden')
        }
        else if(idFoto[i].alt === 'foto 03'){
            img03.classList.add('hidden')
            img04.classList.remove('hidden')
        }
        else if(idFoto[i].alt === 'foto 04'){
            img04.classList.add('hidden')
            img05.classList.remove('hidden')
        }
        else if(idFoto[i].alt === 'foto 05'){
            img05.classList.add('hidden')
            img01.classList.remove('hidden')
        }

    }*/
    
}

//Decrescente
function passarEsquerda(){
    let img01 = document.querySelector('.pic-biomed-01')
    let img02 = document.querySelector('.pic-biomed-02') 
    let img03 = document.querySelector('.pic-biomed-03')
    let img04 = document.querySelector('.pic-biomed-04')
    let img05 = document.querySelector('.pic-biomed-05')
    console.log(img01, img02, img03, img04, img05)
}
