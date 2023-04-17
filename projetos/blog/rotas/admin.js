const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const categoria = require('../models/Categoria')
const flash = require('connect-flash')

router.get('/', (req, res)=>{
    res.render('../views/admin/index')
})

router.get('/posts', (req, res)=>{
    res.send('Página de posts ADM')
})

router.get('/categorias', (req, res)=>{
    categoria.find().lean().sort({data: 'desc'})
        .then((categorias)=>{
            res.render('admin/categorias', {categorias: categorias})
        })
        .catch((err)=>{
            req.flash('error_msg', 'Erro ao listar as categorias')
            res.redirect('/admin')
        })
    
})

router.get('/categorias/add', (req, res)=>{
    res.render('admin/addcategoria')
})

router.post('/categorias/nova', (req, res)=>{
    const { nome } = req.body
    const { slug } = req.body

    let erros = []
    
    if(!nome || typeof nome == undefined || nome == null){
        erros.push({texto: 'Nome inválido'})
    }   
    if(!slug || typeof slug == undefined || slug == null){
        erros.push({texto: 'Slug inválido'})
    }
    if(nome.length < 2){
        erros.push({texto: 'Nome muito pequeno'})
    }
    if(erros.length > 0){
        res.render('admin/addcategoria', {erros: erros})
    }
    else{
        new categoria({
            nome: nome,
            slug: slug
        }).save()
            .then(()=>{
                req.flash('success_msg', 'Categoria cadastrada com sucesso')
                res.redirect('/admin/categorias')
            })
            .catch((err)=>{
                req.flash('error_msg', 'Houve um erro ao tentar cadastrar a categoria')
                console.log('!!!ERRO: ' + err)
            })
    }

})


module.exports = router