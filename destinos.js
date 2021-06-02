console.log("BEM VINDO AO POSTO PR - MORRETES(PR) \n" + "QUANTOS LITROS DE GASOLINA VOCÊ VAI GASTAR NA SUA VIAGEM?\n")


let destinos = [
    {local: "Serra do Rio do Rastro",    km: 553,   tempo_percurso: "08:25"},
    {local: "Rastro da Serpente",        km: 302,   tempo_percurso: "05:41"},
    {local: "Serra Dona Francisca",      km: 187,   tempo_percurso: "03:14"},
    {local: "Serra da Canastra",         km: 919,   tempo_percurso: "13:08"},
    {local: "Serra Gaúcha",              km: 857,   tempo_percurso: "10:57"}
]



for ( let destino of destinos ) {

    let local = destino.local;
    let dist = destino.km;
    let tempo = destino.tempo_percurso;
    let consumo = 20;
    let gasolina = dist / consumo

    console.log("Daqui até " + local + " você vai consumir " + gasolina + " litros de combustível, em um total de " + tempo + " hora(s)\n")
}
