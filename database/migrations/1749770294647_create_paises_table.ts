import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'paises'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cod_pais') // PK
      table.string('nombre_pais')
      table.boolean('comunitario')

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}