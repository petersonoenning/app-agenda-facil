import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'agenda'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.time('horario_inicial').notNullable()
      table.time('horario_final').notNullable()
      table.date('data').notNullable()
      table.string('observacao', 100).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}