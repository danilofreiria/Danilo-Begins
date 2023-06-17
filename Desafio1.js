//Desafio: Crie uma função chamada findMaxValue que recebe um array 
//de números como parâmetro e retorna o maior valor presente no array.

//Requisitos:
//A função deve retornar null se o array estiver vazio.
//A função deve ignorar elementos não numéricos e considerar 
//apenas os números válidos para encontrar o maior valor.

function Maior_Valor(array) {
    let maiorvalor = array[0];

    for (let i = 0; i < array.length; i++);
    if (typeof array[i] === 'number') {
        return null;
    } else if (array[i] > maiorvalor) {
        maiorvalor = array[i]
    }

    return maiorvalor
}

