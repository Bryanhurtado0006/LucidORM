import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vehiculos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('placa').unique()
      table.string('tipo').notNullable() //no obligatorio
      table.string('propietario').notNullable()
      
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}