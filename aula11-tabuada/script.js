function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
         window.alert('Por favor digite um número')
    }else{
       let n = Number(num.value)
       tab.innerHTML= '' /*limpar a tabuada anterior*/
       for(let c = 1; c<= 10; c++){
        let item = document.createElement('option') /*criar caixa de seleção OPTION*/
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item) /*adicionar o elemento filho*/
       }
    }
}