import Servico from '#models//servico'
import { createServicoValidator, messagesServicoProvider } from '#validators/servico'
import type { HttpContext } from '@adonisjs/core/http'

export default class ServicosController {
  /**
   * Display a list of resource
   */
   async index({ view }: HttpContext) {
    const servicos = await Servico.all()

    return view.render('pages/servico/consulta_servico', { servicos })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/servico/cadastro_servico')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, session }: HttpContext) {
    const dados = request.all()
  
    const dadosValidos = await createServicoValidator.validate(dados, {
      messagesProvider: messagesServicoProvider,
    })
  
    const servico = await Servico.create({
      nome: dadosValidos.nome,
      descricao: dadosValidos.descricao,
      valor: dadosValidos.valor
    })
  
    console.log(servico)
    if (servico.$isPersisted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Serviço ${servico.nome} cadastrado com sucesso!`,
      })
    }
    return response.redirect().toRoute('servicos.create')
  }
  

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const servico = await Servico.find(params.id)

    return view.render('pages/servico/cadastro_servico', { servico })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response, session }: HttpContext) {
    const servico = await Servico.find(params.id)

    if (!servico) {
      session.flash('notificacao', {
        type: 'danger',
        message: `Serviço informado não encontrado!`,
      })
    }

    const dados = await createServicoValidator.validate(request.all(), {
      messagesProvider: messagesServicoProvider,
    })

    await servico?.merge(dados).save()

    if (servico?.$isPersisted) {
      session.flash('notificacao', {
        type: 'warning',
        message: `Serviço ${servico.nome} atualizado com sucesso!`,
      })
    }

    return response.redirect().toRoute('servicos.create')
  }

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    const servico = await Servico.find(params.id)

    console.log(servico)

    await servico?.delete()

    if (servico?.$isDeleted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Serviço excluído com sucesso!`,
      })
    }

    return response.redirect().toRoute('servicos.create')
  }
}