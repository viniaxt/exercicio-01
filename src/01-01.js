const pessoas = require("../db/db")

var obj = new Object

pessoas.forEach( (pessoa) => {
    if (obj[pessoa.hairColor]) {
        obj[pessoa.hairColor].push(pessoa)
    } else {
        obj[pessoa.hairColor] = [ pessoa ]
    }
})

console.log(obj)

/*const Loiro = {}
    Loiro.hairColor = cor = c => c.hairColor === 'Loiro'
    //console.log(pessoas.filter(cor))
    obj['Loiro'] = pessoas.filter(cor)
   // console.log(obj)
        
const Preto = {}
    Preto.hairColor = cor1 = c => c.hairColor === 'Preto'
    //console.log(pessoas.filter(cor1))

const Careca = {}
    Careca.hairColor = cor2 = c => c.hairColor === 'Careca'
    //console.log(pessoas.filter(cor2))

    //console.log(pessoas.filter(pessoa => pessoa.hairColor === "Careca"))*/






