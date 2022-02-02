/* Preencher a constante "parametros" com os dados respectivamente:
    id (identificador da função); 
    nome (nome da função); 
    n (número de termo), 
    ​a1 (o primeiro termo) 
    e​ (a razão).
    
*/


const parametros = {
    id: 1,
    nome: "random",
    n: 2,
    a1: 3,
    e: 4
}

    function pA({n, a1, e}){
        console.log("Progressão Aritmética: \n")
        let prog = 0, soma = 0
        for(let i = 1; i <= n; i++){
            prog = a1 + (i - 1) * e
            soma += prog
            console.log("Termo " + i + " = " + prog)
        }
        console.log("A soma de todos os " + n + " termos é " + soma + "\n")
    }

    function pG({n, a1, e}){
        console.log("Progressão Geométrica: \n")
        let prog = 0, soma = 0
        for(let i = 1; i <= n; i++){
            prog = a1 * (Math.pow(e,(i-1)))
            soma += prog
            console.log("Termo " + i + " = " + prog)
        }
        console.log("A soma de todos os " + n + " termos é " + soma)
    }

pA(parametros)
pG(parametros)
