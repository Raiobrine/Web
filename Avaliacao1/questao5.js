function numPrimos(inicio = 0, fim = 100) {
    var divisores = 0

    if (fim < inicio) {
        const troca = fim
        inicio = fim
        fim = troca
    }

    for (let contador = inicio; contador <= fim; contador ++){
        divisores = 0

        for(let auxiliar = 1; auxiliar <= contador; auxiliar++){
            if(contador % auxiliar == 0){
                divisores++
            }
        }
        
        if(divisores == 2){
            console.log(contador)
        }
    }
}


numPrimos()     /*Inserir primeiro o inicio e depois o fim entre os () */