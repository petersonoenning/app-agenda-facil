import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'servicos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      
      table.string('nome', 45).notNullable()
      table.string('descricao', 200).notNullable()
      table.decimal('valor', 10, 2).notNullable() // 10 dígitos com duas casas decimais no campo de valor

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}