let router = require('express').Router();

const unidadeSaudeController = require('../controllers/unidadeSaude');

router.post('/nova/', unidadeSaudeController.adicionarUnidadeSaude);

router.get('/', unidadeSaudeController.listarUnidadeSaude);

router.get('/:id', unidadeSaudeController.listarUnidadeSaudePorCod);

router.get('/:Cpf', unidadeSaudeController.listarUnidadeSaudePorCpf);

router.put('/:id', unidadeSaudeController.atualizarUnidadeSaude);

module.exports = router;