function tabuada(){
    var num = document.getElementById('fnum')
    var tab = document.getElementById('tab')
    if (num.value.length == 0) {
        window.alert('Insira um número') 
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for (c = 0; c <=10;c++){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        }
    }
}