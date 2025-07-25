/*
Uma variavel simples guarda 1 valor por vez
Uma variavel composta ela guarda vários valores
*/
let num = [5,8,2,9,3]
num[3] = 6 /*acrescente (caso não tenha um número), o 6 na casa 3, (ou se já existe) substitua o número da casa 3 com o número 6*/
num.push(7)/*coloque o valor 7 na última casa*/
num.length /*saber quantas casas tem*/
console.log(`Nosso vetor é ${num}`)
console.log(`O vetor tem: ${num.length} posições`)
console.log(`A posição 0 tem o valor: ${num[0]}`)
num.sort() /*colocar em ordem crescente*/
console.log(num)/*mostrar os valores*/

for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
} 
/*
let pos = 0: inicializa a posição (índice) com 0
pos < num.length: o loop continua enquanto pos for menor que o tamanho do vetor
pos++: incrementa a posição a cada iteração
num[pos]: acessa o valor da posição atual do array
*/