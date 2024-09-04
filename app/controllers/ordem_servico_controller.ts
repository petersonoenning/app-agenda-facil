import OrdemServico from '#models/ordem_servico'
import Cliente from '#models/cliente'
import Servico from '#models/servico'
import Funcionario from '#models/funcionario'
import type { HttpContext } from '@adonisjs/core/http'

export default class OrdemServicosController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const ordemServicos = await OrdemServico.query().preload('cliente').preload('servico').preload('funcionario')
    return view.render('pages/ordem/consulta_ordemdeservico', { ordemServicos })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    const clientes = await Cliente.all()
    const servicos = await Servico.all()
    const funcionarios = await Funcionario.all()
    return view.render('pages/ordem/cadastro_ordemdeservico', { clientes, servicos, funcionarios })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, session }: HttpContext) {
    const dados = request.all()

    const ordemServico = await OrdemServico.create({
      dataOrdem: dados.dataOrdem,
      clienteId: dados.clienteId,
      servicoId: dados.servicoId,
      funcionarioId: dados.funcionarioId,
    })

    if (ordemServico.$isPersisted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Ordem de Serviço criada com sucesso!`,
      })
    }
    return response.redirect().toRoute('ordem_servicos.create')
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const ordemServico = await OrdemServico.find(params.id)
    const clientes = await Cliente.all()
    const servicos = await Servico.all()
    const funcionarios = await Funcionario.all()

    return view.render('pages/ordem/cadastro_ordemdeservico', { ordemServico, clientes, servicos, funcionarios })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response, session }: HttpContext) {
    const ordemServico = await OrdemServico.find(params.id)

    if (!ordemServico) {
      session.flash('notificacao', {
        type: 'danger',
        message: `Ordem de Serviço informada não encontrada!`,
      })
    }

    const dados = request.all()

    await ordemServico?.merge(dados).save()

    if (ordemServico?.$isPersisted) {
      session.flash('notificacao', {
        type: 'warning',
        message: `Ordem de Serviço atualizada com sucesso!`,
      })
    }

    return response.redirect().toRoute('ordem_servicos.create')
  }

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    const ordemServico = await OrdemServico.find(params.id)

    await ordemServico?.delete()

    if (ordemServico?.$isDeleted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Ordem de Serviço excluída com sucesso!`,
      })
    }

    return response.redirect().toRoute('ordem_servicos.create')
  }
}
