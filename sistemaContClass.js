// Ângelo Vinícius Barreto Tavares | Turma Full-stack 13
// Codificação de um sistema de contagem e classificação

/*O primeiro bloco do código analisa se a posição da string do nome do filme no array é par ou ímpar. 
Se for par: Marvel; ímpar: DC.*/
/*O segundo bloco classifica os nomes das séries somente de acordo com a posição da string no array, ou seja,
até determinada ordem pertecnce a um universo cinematográfico, dali em diante, à outra, etc.*/

let listaDeFilmes = ["Homem de Ferro","Batman","Capitão América","Liga da Justiça","Vingadores","Mulher Maravilha"];
                    //       0            1            2                 3               4             5
for (let index = 0; index < listaDeFilmes.length; index++) {
    var nomeFilme = listaDeFilmes[index];
    if (index == 0 | index %2 == 0){
        console.log(`${nomeFilme} é um filme da Marvel`)
    }
    else{
        console.log(`${nomeFilme} é um filme da DC`)
    }
}

let listaDeSeries = ["Round 6","Dark","Smallville","Flash","Supergirl","Boba Fett","The Mandalorian"];
                    //    0       1         2          3        4            5            6
    for (let index = 0; index < listaDeSeries.length; index++) {
    var nomeSerie = listaDeSeries[index];
    if (index <= 1){
        console.log(`${nomeSerie} é uma série original Netflix`)
    }
    else if (index <= 4){
        console.log(`${nomeSerie} é uma série da DC`)
    }
    else{
        console.log(`${nomeSerie} é uma série Star Wars`)
    }
}