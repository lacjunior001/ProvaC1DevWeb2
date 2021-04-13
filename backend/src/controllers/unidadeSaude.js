const pessoaModel = require('../models/pessoa')

exports.adicionarPessoa = (req, res) => {
    pessoaModel.find((err, pessoa) => {
        if (err) {
            console.log("Não foi possível recuperar os Dados!")
            res.json({
                status: "erro",
                message: "Não foi possível recuperar dados!"
            })
        }

        for (let i = 0; i < merda.length; i++) {
            if (req.body.nome_pessoa === merda[i].nome_pessoa) {
                res.json({
                    status: "erro",
                    message: "Já Cadastrado"
                })
                return
            }
        }

        let pessoa = new pessoaModel()
        console.log(req.body)


        pessoa.nome_pessoa = req.body.nome_pessoa
        pessoa.cpf_pessoa = req.body.cpf_pessoa
        pessoa.data_nacimento_pessoa = req.body.data_nacimento_pessoa
        pessoa.telefone_pessoa = req.body.telefone_pessoa
        pessoa.grupo_prioritario = req.body.grupo_prioritario
        pessoa.endereco_pessoa = req.body.endereco_pessoa
        pessoa.email_pessoa = req.body.email_pessoa

        pessoa.save((erro) => {
            if (erro) {
                res.send({
                    status: "erro",
                    message: "Não foi possível inserir."
                })
            } else {
                res.send({
                    status: "ok",
                    message: "Inserido com sucesso!"
                })
            }
        })
    }


exports.listarPessoas = (req, res) => {

            pessoasModel.find(function (err, pessoas) {
                if (err) {
                    console.log("Não foi possível recuperar!")
                    res.json({
                        status: "erro",
                        message: "Não foi possível recuperar!"
                    })
                } else {
                    res.json({
                        status: "ok",
                        pessoas: pessoas
                    })
                }
            })
        }

exports.listarPessoasPorCod = (req, res) => {
            let cod_pessoa = req.params.cod_pessoa

            pessoaModel.findById(cod_pessoa, function (err, pessoas) {
                if (err || !pessoa) {
                    console.log("Não foi possível recuperar")
                    res.json({
                        status: "erro",
                        message: "Não foi possível recuperar"
                    });
                } else {
                    res.json({
                        status: "ok",
                        pessoa: pessoas
                    })
                }

            });
        }

exports.listarPessoasPorCpf = (req, res) => {
            let cpf_pessoa = req.params.cpf_pessoa

            pessoaModel.findById(cpf_pessoa, function (err, pessoas) {
                if (err || !pessoa) {
                    console.log("Não foi possível recuperar")
                    res.json({
                        status: "erro",
                        message: "Não foi possível recuperar"
                    });
                } else {
                    res.json({
                        status: "ok",
                        pessoa: pessoas
                    })
                }

            });
        }

exports.atualizarPessoas = (req, res) => {
            let cod_pessoa = req.params.cod_pessoa;

            pessoaModel.findById(cod_pessoa, (erro, pessoas) => {
                if (erro || !pessoa) {
                    console.log("Não foi possível recuperar!");
                    res.json({
                        status: "erro",
                        message: "Não foi possível recuperar"
                    });
                } else {
                    pessoas.nome_pessoa = req.body.nome_pessoa
                    pessoas.cpf_pessoa = req.body.cpf_pessoa
                    pessoas.data_nacimento_pessoa = req.body.data_nacimento_pessoa
                    pessoas.telefone_pessoa = req.body.telefone_pessoa
                    pessoas.grupo_prioritario = req.body.grupo_prioritario
                    pessoas.endereco_pessoa = req.body.endereco_pessoa
                    pessoas.email_pessoa = req.body.email_pessoa
                    pessoas.save((err => {
                        if (err) {
                            res.json({
                                status: "erro",
                                message: "Houve um erro ao atualizar"
                            });
                        } else {
                            res.json({
                                status: "ok",
                                message: "atualizado com sucesso!",
                                novaPessoa: pessoas
                            })
                        }
                    }))
                }
            });
        }
