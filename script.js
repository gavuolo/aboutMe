function menuClick(div){
    console.log(div.innerHTML)
    let elemento = document.querySelector('.click-topbar')
    if(elemento != null){
        elemento.classList.remove('click-topbar')
    }
    div.classList.add('click-topbar')

    if(div.innerHTML === "Sobre"){
        let mainSobre = document.querySelector('.about-menu')
        mainSobre.classList.remove('hidden')
        
        let mainBiomedicina = document.querySelector('.home-menu')
        mainBiomedicina.classList.add('hidden')

        let mainTecnologia = document.querySelector('')
        mainTecnologia.classList.add('hidden')

        let mainContato = document.querySelector('')
        mainContato.classList.add('hidden')
    }
}

