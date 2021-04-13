let router = require('express').Router();

const agendamentoController = require('../controllers/agendamento');

router.post('/nova/', agendamentoController.adicionarAgendamento);

router.get('/', agendamentoController.listarAgendamento);

router.get('/:id', agendamentoController.listarAgendamentoPorCod);

router.get('/:Cpf', agendamentoController.listarAgendamentoPorCpf);

router.put('/:id', agendamentoController.atualizarAgendamento);

module.exports = router;