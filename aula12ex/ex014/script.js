function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')   
    var data = new Date() 
    var hora = 20
    msg.innerHTML = 'Agora são ' + hora + ' horas.'
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'dia.png'
        document.body.style.background = '#e6d1a3'
    } else if (hora >=12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#f2a184'
    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#18183c'
    }
}
