import router from '@adonisjs/core/services/router'
// import ServicosController from '#controllers/servico_controller'

const ServicosController = () => import('#controllers/servico_controller')
router.resource('servicos', ServicosController)

// // Renders
 router.on('/').render('components/layout/index')
//  router.on('/cadastroservico').render('pages/servico/cadastro_servico')
router.on('/consultaservico').render('pages/servico/consulta_servico')
// router.on('/relatorioservico').render('pages/servico/relatorio_servico')

// // Horário
// router.on('/cadastrohorario').render('pages/horario/cadastro_horario')
// router.on('/consultahorario').render('pages/horario/consulta_horario')
// router.on('/relatoriohorario').render('pages/horario/relatorio_horario')

// // Funcionário
// router.on('/cadastrofuncionario').render('pages/funcionario/cadastro_funcionario')
// router.on('/consultafuncionario').render('pages/funcionario/consulta_funcionario')
// router.on('/relatoriofuncionario').render('pages/funcionario/relatorio_funcionario')

// // Ordem de Serviço
// router.on('/cadastroordemdeservico').render('pages/ordem/cadastro_ordemdeservico')
// router.on('/consultaordemdeservico').render('pages/ordem/consulta_ordemdeservico')
// router.on('/relatorioordemdeservico').render('pages/ordem/relatorio_ordemdeservico')

// // Cliente
// router.on('/cadastrocliente').render('pages/cliente/cadastro_cliente')
// router.on('/consultacliente').render('pages/cliente/consulta_cliente')
// router.on('/relatoriocliente').render('pages/cliente/relatorio_cliente')


