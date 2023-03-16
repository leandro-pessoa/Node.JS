(async () => {
    const db = require('./db')
    console.log('Inserindo pessoas no banco')
    await db.inserirPessoas({id: 3, nome: 'Júlia', idade: 20})
    console.log('Selecionar todas as pessoas')
    const pessoas = await db.todasPessoas()
    console.log(pessoas)
})()
