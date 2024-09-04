import Cliente from '#models/cliente'
import Funcionario from '#models/funcionario'
import Servico from '#models/servico'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'ordem_servicos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('data').notNullable()

      table.integer('cliente_id').unsigned().references('clientes.id')
      table.integer('servico_id').unsigned().references('servicos.id')
      table.integer('funcionario_id').unsigned().references('funcionarios.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}