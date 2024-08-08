import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'enderecos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('rua', 45).notNullable()
      table.string('bairro', 45).notNullable()
      table.string('complemento', 45).notNullable()
      table.string('cep', 45).notNullable()
      table.string('cidade', 45).notNullable()
      table.string('pais', 45).notNullable()
      table.string('observacao', 200).notNullable()

      table.enum('estado', [
        'AC', // Acre
        'AL', // Alagoas
        'AP', // Amapá
        'AM', // Amazonas
        'BA', // Bahia
        'CE', // Ceará
        'DF', // Distrito Federal
        'ES', // Espírito Santo
        'GO', // Goiás
        'MA', // Maranhão
        'MT', // Mato Grosso
        'MS', // Mato Grosso do Sul
        'MG', // Minas Gerais
        'PA', // Pará
        'PB', // Paraíba
        'PR', // Paraná
        'PE', // Pernambuco
        'PI', // Piauí
        'RJ', // Rio de Janeiro
        'RN', // Rio Grande do Norte
        'RS', // Rio Grande do Sul
        'RO', // Rondônia
        'RR', // Roraima
        'SC', // Santa Catarina
        'SP', // São Paulo
        'SE', // Sergipe
        'TO',  // Tocantins
        '-' // Padrão
      ]).defaultTo('-').notNullable();


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}