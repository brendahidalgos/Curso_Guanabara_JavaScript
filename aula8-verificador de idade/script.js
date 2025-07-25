function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem' 
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebemasculino.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemmasculino.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultomasculino.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosomasculino.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebefeminino.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemfeminino.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultofeminino.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosofeminino.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) /*executar a imagem*/
    }
}