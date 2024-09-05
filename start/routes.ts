import router from '@adonisjs/core/services/router'
import ClientesController from '#controllers/cliente_controller'
import ServicosController from '#controllers/servico_controller'
import FuncionariosController from '#controllers/funcionario_controller'
import OrdemServicosController from '#controllers/ordem_servico_controller'



 router.on('/').render('components/layout/index')
router.resource('servicos', ServicosController)
router.resource('clientes', ClientesController)
router.resource('funcionarios', FuncionariosController)
router.resource('ordem_servicos', OrdemServicosController)
