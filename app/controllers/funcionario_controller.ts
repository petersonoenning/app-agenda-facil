import Funcionario from '#models//funcionario'
import { createFuncionarioValidator, messagesFuncionarioProvider } from '#validators/funcionario'
import type { HttpContext } from '@adonisjs/core/http'

export default class FuncionariosController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const funcionarios = await Funcionario.all()
    return view.render('pages/funcionario/consulta_funcionario', { funcionarios })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/funcionario/cadastro_funcionario')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, session }: HttpContext) {
    const dados = request.all()

    const dadosValidos = await createFuncionarioValidator.validate(dados, {
      messagesProvider: messagesFuncionarioProvider,
    })

    const funcionario = await Funcionario.create({
      nome: dadosValidos.nome,
      funcao: dadosValidos.funcao,
    })

    if (funcionario.$isPersisted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Funcionário ${funcionario.nome} cadastrado com sucesso!`,
      })
    }
    return response.redirect().toRoute('funcionarios.create')
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const funcionario = await Funcionario.find(params.id)

    return view.render('pages/funcionario/cadastro_funcionario', { funcionario })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response, session }: HttpContext) {
    const funcionario = await Funcionario.find(params.id)

    if (!funcionario) {
      session.flash('notificacao', {
        type: 'danger',
        message: `Funcionário informado não encontrado!`,
      })
    }

    const dados = await createFuncionarioValidator.validate(request.all(), {
      messagesProvider: messagesFuncionarioProvider,
    })

    await funcionario?.merge(dados).save()

    if (funcionario?.$isPersisted) {
      session.flash('notificacao', {
        type: 'warning',
        message: `Funcionário ${funcionario.nome} atualizado com sucesso!`,
      })
    }

    return response.redirect().toRoute('funcionarios.create')
  }

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    const funcionario = await Funcionario.find(params.id)

    await funcionario?.delete()

    if (funcionario?.$isDeleted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Funcionário excluído com sucesso!`,
      })
    }

    return response.redirect().toRoute('funcionarios.create')
  }
}
