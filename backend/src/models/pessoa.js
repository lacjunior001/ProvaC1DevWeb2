const mongoose = require('mongoose')

const pessoaSchema = mongoose.Schema({
    nome_pessoa: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    cpf_pessoa: {
        type: mongoose.Schema.Types.String,
        default: null
    },
    data_nacimento_pessoa: {
        type: mongoose.Schema.Types.Date,
        default: null
    },
    telefone_pessoa: {
        type: mongoose.Schema.Types.String,
        default: null
    },
    grupo_prioritario: {
        type: mongoose.Schema.Types.Boolean,
        default: null
    },
    endereco_pessoa: {
        type: mongoose.Schema.Types.String,
        default: null
    },
    email_pessoa: {
        type: mongoose.Schema.Types.String,
        default: null
    }
})

let Pessoa = module.exports = mongoose.model('pessoa', pessoaSchema)

module.exports.get = function (callback, limit) {
    Pessoa.find(callback).limit(limit)
}