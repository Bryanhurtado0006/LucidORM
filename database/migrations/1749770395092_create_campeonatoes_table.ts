import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'campeonatoes' 

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodCamp').primary()
      table.string('NombreCamp').notNullable()
      
      // Clave foránea hacia la tabla países
      table
        .integer('CodPais')
        .unsigned()
        .references('CodPais')
        .inTable('paises')
        .onDelete('CASCADE')

      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
