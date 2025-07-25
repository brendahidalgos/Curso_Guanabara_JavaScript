/*funções são ações executadas assim que são chamadas ou em decorrência de algum evento*/
/*uma função pode receber parametros e retornar um resultado*/


/*verifica se um número é par ou ímpar*/
function parimpar(n){ /*Declara a função com um parâmetro n (o número que será testado).*/
    if (n%2 == 0){ /*Usa o operador módulo %, que retorna o resto da divisão. Se n % 2 == 0, o número é par (divisível por 2).*/
        return 'Par!' /*Se for par, retorna a string 'Par!'*/
    }else{
        return 'Impar!' /*e não for par, retorna 'Impar!'*/
    }
}
/*chamada*/
console.log(parimpar(2))