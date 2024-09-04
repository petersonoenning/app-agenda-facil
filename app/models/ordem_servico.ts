import Cliente from '#models/cliente'
import Servico from '#models/servico'
import Funcionario from '#models/funcionario'
import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class OrdemServico extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare dataOrdem: Date

  @column()
  declare clienteId: number

  @belongsTo(() => Cliente, {foreignKey: 'clienteId'})
  declare cliente: BelongsTo<typeof Cliente>

  @column()
  declare servicoId: number

  @belongsTo(() => Servico, {foreignKey: 'servicoId'})
  declare servico: BelongsTo<typeof Servico>

  @column()
  declare funcionarioId: number

  @belongsTo(() => Funcionario, {foreignKey: 'funcionarioId'})
  declare funcionario: BelongsTo<typeof Funcionario>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
