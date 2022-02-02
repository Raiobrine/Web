const usuario = {
    "autor": "Demetrio Mestre",
    "endereco": {
        "rua": "Rua Qualquer",
        "suite": "JS",
        "cidade": "Campina Grande",
        "CEP": "581415-145",
        "geo": {
            "lat": "13.51",
            "lng": "52.54"
        }
    }
}

const nome = `${usuario['autor']}`
const cidade = `${usuario["endereco"]['cidade']}`
const coordenada = `(${usuario["endereco"]["geo"]['lat']}, ${usuario["endereco"]["geo"]['lng']})`

const resultado =  nome + " - " + cidade + " " + coordenada;
console.log(resultado);