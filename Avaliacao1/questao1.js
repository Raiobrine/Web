const array = [1, 60, 232, 7, 25, 76, 29,74, 92]
var somatorio = 0

const lista = array.filter((array)=> array > 60 && array < 300)

function somar(numero){
    somatorio += numero
}

lista.forEach(somar)

console.log(`A lista dos valores maiores que 60 é: ${lista}. A soma dos elementos da lista é: ${somatorio}`)