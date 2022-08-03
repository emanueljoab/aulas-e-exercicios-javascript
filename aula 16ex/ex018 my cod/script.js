var todos = []
function adicionar() {
    var num = document.getElementById('fnum')
    if (num.value.length == 0 || num.value > 100 || num.value < 1 ) {
        window.alert('Insira um número válido.')
    } else if (todos.indexOf(Number(num.value)) != -1) {
        window.alert('Número já inserido')
    } else {
        todos.push(Number(num.value));
        var tabela = document.createElement('option');
        tabela.text = `${num.value} adicionado`;
        sel.appendChild(tabela);
        num.value = ''
    }    
}
function analisar() {
    if (todos == 0){
        window.alert('Insira números e clique em Adicionar.')
    } else {
        const maior = Math.max(...todos)
        const menor = Math.min(...todos);
        const soma = todos.reduce((a, b) => a + b, 0)
        const media = soma / todos.length
        final.innerHTML = `<p>O total de números adicionados é ${todos.length}.
        <p>O maior valor inserido é ${maior}.
        <p>O menor valor inserido é ${menor}.
        <p>A soma dos valores é ${soma}.
        <p>A média dos valores é ${media}.`
    }
}