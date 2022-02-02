const colocarTodasPalavrasEmMaiusculo=(vetor)=>new Promise((resolve,reject)=>{
    if (vetor.filter((i) => typeof i !== 'string').length){
        reject("Há caracteres inválidos na lista!")
    }
    resolve(vetor.map((i) => 
        i = i.toUpperCase())
    )
})

const ordenarPalavras=(vetor)=>new Promise((resolve,reject)=>{
    vetor.forEach(function (e) {
        if (typeof e !== 'string'){
            e = 1
        }
    })
    if(vetor.filter((i) => typeof i !== 'string').length){
        reject("Há caracteres inválidos na lista!")
    }
    resolve(vetor.sort())
})

//Altere aqui os elementos do vetor
const vetor = ['Roberto', 'Yasmin', 'Jefferson']

colocarTodasPalavrasEmMaiusculo(vetor).then(ordenarPalavras).then((e) => console.log(e))
