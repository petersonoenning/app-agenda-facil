/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

//serviço

router.on('/cadastroservico').render('components/layout/cadastro_servico')
router.on('/consultaservico').render('components/layout/consulta_servico')
router.on('/relatorioservico').render('components/layout/relatorio_servico')

// horário

router.on('/cadastrohorario').render('components/layout/cadastro_horario')
router.on('/consultahorario').render('components/layout/consulta_horario')
router.on('/relatoriohorario').render('components/layout/relatorio_horario')

// funcionário

router.on('/cadastrofuncionario').render('components/layout/cadastro_funcionario')
router.on('/consultafuncionario').render('components/layout/consulta_funcionario')
router.on('/relatoriofuncionario').render('components/layout/relatorio_funcionario')

// ordem de serviço

router.on('/cadastroordemdeservico').render('components/layout/cadastro_ordemdeservico')
router.on('/consultaordemdeservico').render('components/layout/consulta_ordemdeservico')
router.on('/relatorioordemdeservico').render('components/layout/relatorio_ordemdeservico')

// cliente

router.on('/cadastrocliente').render('components/layout/cadastro_cliente')
router.on('/consultacliente').render('components/layout/consulta_cliente')
router.on('/relatoriocliente').render('components/layout/relatorio_cliente')