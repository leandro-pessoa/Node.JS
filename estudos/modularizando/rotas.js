const express = require('express')
const rotas = express.Router()

let carros = [
    {'carro' : 'Supra', 'marca' : 'Toyta'},
    {'carro' : 'P1', 'marca' : 'Mclaren'},
    {'carro' : 'LaFerrari', 'marca' : 'Ferrari'},
    {'carro' : 'Huayra', 'marca' : 'Paganni'}
]

rotas.get('/', (require, response) => {
    response.send('<h1>Seja bem-vindo(a)</h1>')
})
rotas.get('/:carroId', (require, response) => {
    const carro = require.params.carroId
    const carrosI = carros.find(i => i.carro == carro)
    if(!carrosI){
        response.status(404).json(
            {erro: 'Carro não encontrado'}
        )
    }
    else{
        response.status(200).json(carrosI)
    }
})

module.exports = rotas