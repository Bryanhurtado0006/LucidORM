import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clubes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cod_club')
      table.string('club')
      table.string('nombre').notNullable()//obligatoriedad
      table.string('direccion').notNullable()
      table.string('poblacion')
      table.string('provincia')
      table.string('CosPostal')
      table.string('TLfno')
      table.string('colores')
      table.string('himno')
      table.string('fax')
      table.string('añoFundacion')
      table.string('presupuesto')
      table.string('presidente')
      table.string('vicepresidente')
      

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}