let mainInicio = document.querySelector('.home-menu')
let mainSobre = document.querySelector('.about-menu')
let mainBiomedicina = document.querySelector('.biomed-main')
let mainTecnologia = document.querySelector('.tech-main')
let mainContato = document.querySelector('.contact-main')

function menuClick(div){
    console.log(div.innerHTML)
    let elemento = document.querySelector('.click-topbar')
    if(elemento != null){
        elemento.classList.remove('click-topbar')
    }
    div.classList.add('click-topbar')

    if(div.innerHTML === "Início"){
        mainInicio.classList.remove('hidden')
        mainInicio.classList.add('fadeIn')
        
        mainSobre.classList.add('hidden')
        mainBiomedicina.classList.add('hidden')
        mainTecnologia.classList.add('hidden')
        mainContato.classList.add('hidden')
    }
    if(div.innerHTML === "Sobre"){
        mainSobre.classList.remove('hidden')
        mainSobre.classList.add('fadeIn')

        mainInicio.classList.add('hidden')
        mainBiomedicina.classList.add('hidden')
        mainTecnologia.classList.add('hidden')
        mainContato.classList.add('hidden')
    }
    if(div.innerHTML === "Biomedicina"){
        mainBiomedicina.classList.remove('hidden')
        mainBiomedicina.classList.add('fadeIn')
        
        mainInicio.classList.add('hidden')
        mainSobre.classList.add('hidden')
        mainTecnologia.classList.add('hidden')
        mainContato.classList.add('hidden')
    }
    if(div.innerHTML === "Tecnologia"){
        mainTecnologia.classList.remove('hidden')
        mainTecnologia.classList.add('fadeIn')
        
        mainInicio.classList.add('hidden')
        mainSobre.classList.add('hidden')
        mainBiomedicina.classList.add('hidden')
        mainContato.classList.add('hidden')

    }
    if(div.innerHTML === "Contato"){
        mainContato.classList.remove('hidden')
        mainContato.classList.add('fadeIn')
        
        mainInicio.classList.add('hidden')
        mainSobre.classList.add('hidden')
        mainBiomedicina.classList.add('hidden')
        mainTecnologia.classList.add('hidden')

    }
}