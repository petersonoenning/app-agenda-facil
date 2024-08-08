import { HttpContext } from '@adonisjs/core/build/standalone'
import Servico from 'App/Models/Servico'

export default class ServicosController {
  public async index({ response }: HttpContext) {
    const servicos = await Servico.all()
    return response.json(servicos)
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['nome', 'descricao', 'valor'])
    const servico = await Servico.create(data)
    return response.status(201).json(servico)
  }
}
