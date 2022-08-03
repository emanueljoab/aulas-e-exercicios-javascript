function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var sauda = document.querySelector('h1#sauda')
    msg.innerHTML = `Agora são ${hora} hora(s) e ${minuto} minuto(s).`
    if (hora >= 6 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#d89d54'
        sauda.innerHTML = `Bom dia!`
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#4a80e2'
        sauda.innerHTML = `Bom tarde!`
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#1a2d31'
        sauda.innerHTML = `Bom noite!`
    }
}  