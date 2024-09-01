import Cliente from '#models//cliente'
import { createClienteValidator, messagesClienteProvider } from '#validators/cliente'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClientesController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const clientes = await Cliente.all()
    return view.render('pages/cliente/consulta_cliente', { clientes })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/cliente/cadastro_cliente')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, session }: HttpContext) {
    const dados = request.all()

    const dadosValidos = await createClienteValidator.validate(dados, {
      messagesProvider: messagesClienteProvider,
    })

    const cliente = await Cliente.create({
      nome: dadosValidos.nome,
      telefone: dadosValidos.telefone,
      email: dadosValidos.email,
      idade: dadosValidos.idade,
    })

    if (cliente.$isPersisted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Cliente ${cliente.nome} cadastrado com sucesso!`,
      })
    }
    return response.redirect().toRoute('clientes.create')
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const cliente = await Cliente.find(params.id)

    return view.render('pages/cliente/cadastro_cliente', { cliente })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response, session }: HttpContext) {
    const cliente = await Cliente.find(params.id)

    if (!cliente) {
      session.flash('notificacao', {
        type: 'danger',
        message: `Cliente informado não encontrado!`,
      })
    }

    const dados = await createClienteValidator.validate(request.all(), {
      messagesProvider: messagesClienteProvider,
    })

    await cliente?.merge(dados).save()

    if (cliente?.$isPersisted) {
      session.flash('notificacao', {
        type: 'warning',
        message: `Cliente ${cliente.nome} atualizado com sucesso!`,
      })
    }

    return response.redirect().toRoute('clientes.create')
  }

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    const cliente = await Cliente.find(params.id)

    await cliente?.delete()

    if (cliente?.$isDeleted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Cliente excluído com sucesso!`,
      })
    }

    return response.redirect().toRoute('clientes.create')
  }
}
