(async () => {
    const db = require('./db')
    /*
    console.log('Inserindo pessoas no banco')
    await db.inserirPessoas({id: 3, nome: 'Leandro', idade: 19})
    */
   /*
    console.log('Alterando dados')
    let id = 1
    let nome = 'Lucas'
    idade = 14
    await db.updatePessoas(id, {nome: nome, idade: idade})
    */
    console.log('Deletando o dado')
    let nome = 'Leandro'
    let idade = 19
    await db.deletePessoa({nome: nome, idade: idade})

    console.log('Selecionar todas as pessoas')
    const pessoas = await db.todasPessoas()
    console.log(pessoas)
})()

