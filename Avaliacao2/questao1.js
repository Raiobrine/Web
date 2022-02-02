function map(funcao, array){
    let vetor = [];

    array.reduce((valorAnterior, valorAtual, indiceAtual, arrayOriginal) => {     
        return vetor[indiceAtual] = funcao(arrayOriginal[indiceAtual]);
    }, 0);
    return vetor
}

function isEqual(arrayTriplicado, array){
    const chavesArrayTriplicado = Object.keys(arrayTriplicado)

    for (let chaveObj of chavesArrayTriplicado){
        if (arrayTriplicado[chaveObj] !== array[chaveObj]){
            return false;
        }
        return true;
    }
}

function executaTeste() {
    const array = [1, 2, 3, 4, 5];
    const arrayTriplicado = map((num) => num * 3, array);

    if (isEqual(arrayTriplicado, [3, 6, 9, 12, 15])){ 
        console.log('✓ Passou no teste!')
    } 
    else {
        console.error('O teste falhou :(')
        console.error('Resultado atual:');
        console.error(arrayTriplicado);
        console.error('Resultado esperado:');
        console.error([3, 6, 9, 12, 15]);
    }
}

executaTeste();