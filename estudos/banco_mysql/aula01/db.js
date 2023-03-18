const conectar = async () => {
    if(global.conexao && global.conexao.state != 'disconected'){
        return global.conexao
    }
    const mysql = require('mysql2/promise')
    const conect = mysql.createConnection('mysql://root:@localhost:3306/node_js')
    console.log('Conexão criada')
    global.conexao = conect
    return conect
}

const todasPessoas = async () => {
    const conect = await conectar()
    const [linhas] = await conect.query('select * from pessoas')
    return await linhas
}

const inserirPessoas = async (pessoa) => {
    const conect = await conectar()
    const sql = 'insert into pessoas (id, nome, idade) values (?, ?, ?)'
    const valores = [pessoa.id, pessoa.nome, pessoa.idade]
    await conect.query(sql, valores)
}

const updatePessoas = async (id, pessoa) => {
    const conect = await conectar()
    const sql = 'update pessoas set nome=?, idade=? where id=?'
    const valores = [pessoa.nome, pessoa.idade, id]
    await conect.query(sql, valores)
}

const deletePessoa = async (pessoa) => {
    const conect = await conectar()
    const sql = 'delete from pessoas where nome=? and idade=?'
    const valores = [pessoa.nome, pessoa.idade]
    await conect.query(sql, valores)
}

module.exports = {todasPessoas, inserirPessoas, updatePessoas, deletePessoa}