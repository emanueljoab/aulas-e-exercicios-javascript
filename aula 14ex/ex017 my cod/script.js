function gerar(){
    var num = document.getElementById('txtnum')
    var res = document.getElementById('res')
    var n = Number(num.value)
    if (num.value.length == 0) {
        res.innerHTML = 'Insira um número, macaquinho.'
    } else {
        for(var c = 0; c <=10; c++){
        res.innerHTML += `<p>${n} X ${c} = ${n*c}</p>`
        }
    }
}