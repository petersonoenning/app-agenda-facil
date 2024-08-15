import router from '@adonisjs/core/services/router'
import ServicosController from '#controllers/servico_controller'


// Renders
router.on('/').render('components/layout/index')
router.on('/cadastroservico').render('components/layout/servico/cadastro_servico')
router.on('/consultaservico').render('components/layout/servico/consulta_servico')
router.on('/relatorioservico').render('components/layout/servico/relatorio_servico')

// Horário
router.on('/cadastrohorario').render('components/layout/horario/cadastro_horario')
router.on('/consultahorario').render('components/layout/horario/consulta_horario')
router.on('/relatoriohorario').render('components/layout/horario/relatorio_horario')

// Funcionário
router.on('/cadastrofuncionario').render('components/layout/funcionario/cadastro_funcionario')
router.on('/consultafuncionario').render('components/layout/funcionario/consulta_funcionario')
router.on('/relatoriofuncionario').render('components/layout/funcionario/relatorio_funcionario')

// Ordem de Serviço
router.on('/cadastroordemdeservico').render('components/layout/ordem/cadastro_ordemdeservico')
router.on('/consultaordemdeservico').render('components/layout/ordem/consulta_ordemdeservico')
router.on('/relatorioordemdeservico').render('components/layout/ordem/relatorio_ordemdeservico')

// Cliente
router.on('/cadastrocliente').render('components/layout/cliente/cadastro_cliente')
router.on('/consultacliente').render('components/layout/cliente/consulta_cliente')
router.on('/relatoriocliente').render('components/layout/cliente/relatorio_cliente')


router.resource('servicos', ServicosController)