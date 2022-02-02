function apresentarTCC(dataEntrega, dataLimite){
    if(dataEntrega < 1 || dataEntrega > 24 || dataLimite < 1 || dataLimite > 24 || isNaN(dataEntrega) || isNaN(dataLimite)){
        console.log("Inserir datas entre 0 e 25!")
    }
    else if(dataEntrega > dataLimite){
        console.log("A data de entrega deve vir antes da data final da revisão!")
    }
    else{
        if (dataEntrega > dataLimite || dataLimite >= 24){
            console.log('Eu odeio o prof. Florovsky!')
        } else {
            let diferenca = dataLimite - dataEntrega
            if (diferenca >= 3){
                console.log('Muito bem! O aluno está apto a apresentar até o Natal!\n')
            } else if (diferenca < 3){
                console.log('O trabalho está muito ruim!')
                dataLimite += 2
                if (dataLimite <= 24){
                    console.log('TCC Apresentado!')
                } else {
                    console.log('Não deu! Só no próximo ano agora.')
                }
            }
        }
    }
}

//insira aqui as datas
apresentarTCC(dataEntrega = 13, dataLimite = 19)