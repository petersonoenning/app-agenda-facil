/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('components/layout/index')
router.on('/cadastroservico').render('components/layout/cadastro_servico')
router.on('/consultaservico').render('components/layout/consulta_servico')
router.on('/relatorioservico').render('components/layout/relatorio_servico')