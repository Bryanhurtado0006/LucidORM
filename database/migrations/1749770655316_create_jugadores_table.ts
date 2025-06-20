import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jugadores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodJug')
      table.string('nombre')
      table.string('posicion')
      table.integer('dorsal')
      table.integer('edad')
      table.string('nacionalidad')

      table
        .integer('cod_club') //foranea
        .unsigned()
        .references('CodClub')
        .inTable('clubes')
        .onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
