const notas = [2.5,8.7,10.0,5.5,6.9]  //inserir as notas aqui

const notasLetras = (notas) => {
    if(notas > 0.0 && notas <= 4.9){
        console.log(`Nota ${notas} = D`)
    }
    else if(notas > 4.9 && notas <= 6.9){
        console.log(`Nota ${notas} = C`)
    }
    else if(notas > 6.9 && notas <= 8.9){
        console.log(`Nota ${notas} = B`)
    }
    else if(notas > 8.9 && notas <= 10.0){
        console.log(`Nota ${notas} = A`)
    }
}

console.log('Conceitos: ')
for( let i = 0; i < notas.length; i++){
     notasLetras(notas[i])
}