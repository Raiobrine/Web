function notas(valor){

    var copia = valor;

    var nota200 = parseInt(copia / 200 ); 
    copia -= nota200 * 200;

    var nota100 = parseInt(copia / 100 ); 
    copia -= nota100 * 100;

    var nota50 = parseInt( copia/ 50 ); 
    copia -= nota50 * 50;

    var nota20 = parseInt( copia/ 20 ); 
    copia -= nota20 * 20;

    var nota10 = parseInt( copia/ 10 ); 
    copia -= nota10 * 10;

    var nota5 = parseInt( copia/ 5 ); 
    copia -= nota5 * 5;

    var nota2 = parseInt( copia / 2 ); 
    copia -= nota2 * 2;

    var moeda1 = parseInt(copia);

    var moedas = valor - Math.floor(valor)
    moedas = moedas.toFixed(2)

    var moeda50 = parseInt( (moedas/ 0.50).toFixed(2) ); 
    moedas -= moeda50 * 0.50;

    var moeda25 = parseInt( (moedas/ 0.25).toFixed(2) ); 
    moedas -= moeda25 * 0.25;

    var moeda10 = parseInt( (moedas/ 0.10).toFixed(2) ); 
    moedas -= moeda10 * 0.10;

    var moeda5 = parseInt( (moedas/ 0.05).toFixed(2) ); 
    moedas -= moeda5 * 0.05;

    var moeda01 = parseInt( (moedas/ 0.01).toFixed(2) ); 
    moedas -= moeda1 * 0.01;

    console.log("NOTAS:");
    console.log( nota200 + " nota(s) de R$ 200,00" ); 
    console.log( nota100 + " nota(s) de R$ 100,00" ); 
    console.log( nota50 + " nota(s) de R$ 50,00" ); 
    console.log( nota20 + " nota(s) de R$ 20,00" ); 
    console.log( nota10 + " nota(s) de R$ 10,00" ); 
    console.log( nota5 + " nota(s) de R$ 5,00" ); 
    console.log( nota2 + " nota(s) de R$ 2,00" ); 

    console.log("MOEDAS:");
    console.log( moeda1 + " moeda(s) de R$ 1,00" );
    console.log( moeda50 + " moeda(s) de R$ 0.50")
    console.log( moeda25 + " moeda(s) de R$ 0.25")
    console.log( moeda10 + " moeda(s) de R$ 0.10")
    console.log( moeda5 + " moeda(s) de R$ 0.05")
    console.log( moeda01 + " moeda(s) de R$ 0.01")
}

notas()   /* Inserir o valor dentro dos ()*/