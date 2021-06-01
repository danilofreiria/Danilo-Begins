///MOTIVACIONAL DA DEPRESSÃO\\\

let frases_des = [
    "Bom dia! Que Deus te elimine nessa segunda-feira abençoada!",
    "Terça-feira! Que você tropece em todos os obstáculos que a vida pôs no seu caminho!",
    "Hoje é quarta-feira! Lembre-se: Deus está sempre pronto apara arrebentar seus sonhos!",
    "Já é quinta-feira? Mais uma semana sem fazer nada de produtivo, graças a Deus!",
    "Hoje é o famigerado dia! Bora sextar, furar a quarentena, pegar covid e morrer sozinho e sem ar!",
    "Sabadão de solidão e alcoolismo! Confie no seu potencial (mas não tanto)",
    "Já sabe, né? Amanhã começa tudo de novo... Até você sentir o doce abraço da morte."
]

let dia = ["domingo","segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "Sábado"]
let hoje = new Date()
let hojeeh = hoje.getDate()

console.log("DESMOTIVACIONAL DA PANDEMIA")
console.log("Hoje é "  + dia[hojeeh] + "!")
console.log("Mensagem do dia:\n" + frases_des[hojeeh])




