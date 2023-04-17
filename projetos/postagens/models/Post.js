const db = require('./db')

const postagens = db.sequelize.define('postagens', {
    titulo: {type: db.Sequelize.STRING},
    conteudo: {type: db.Sequelize.TEXT}
})

module.exports = postagens