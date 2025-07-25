function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){ /*Verifica se o campo está vazio. Se sim, exibe um alerta.*/
         window.alert('Por favor digite um número')
    }else{
       let n = Number(num.value) /*Converte o valor digitado para número e guarda em n.*/
       tab.innerHTML= '' /*limpar a tabuada anterior*/
       for(let c = 1; c<= 10; c++){ /*Inicia o laço for, que vai de 1 a 10 (para multiplicar de 1 a 10).*/
        let item = document.createElement('option') /*Cria dinamicamente um item da lista para ser adicionado ao <select>.*/
        item.text = `${n} x ${c} = ${n*c}`/*Monta a frase com o resultado da multiplicação (ex: "5 x 2 = 10").*/
        item.value = `tab${c}`/*Define o valor interno da opção. Ex: tab2, tab3 etc.*/
        tab.appendChild(item) /*Insere o item como filho do <select>.*/
       }
    }
}