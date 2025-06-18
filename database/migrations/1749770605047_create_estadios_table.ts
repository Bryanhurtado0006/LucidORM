import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estadios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodEstadios')
      table.string('estadio').notNullable()
      table.string('direccion').notNullable()
      table.string('cod_postal')
      table.string('poblacion')
      table.string('provincia').notNullable()
      table.integer('capacidad').notNullable()
      table.integer('sentados')
      table.date('inauguracion')
//FORANEA
      table.integer('CodClub')
      .notNullable()
      .references('CodClub')
      .inTable('clubes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}