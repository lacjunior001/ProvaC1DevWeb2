let router = require('express').Router();

const pessoaController = require('../controllers/pessoa');

router.post('/nova/', pessoaController.adicionarPessoa);

router.get('/', pessoaController.listarPessoas);

router.get('/:id', pessoaController.listarPessoasPorCod);

router.get('/:Cpf', pessoaController.listarPessoasPorCpf);

router.put('/:id', pessoaController.atualizarPessoas);

module.exports = router;