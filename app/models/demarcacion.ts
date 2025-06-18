import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Pais extends BaseModel {
  @column({ isPrimary: true })
  declare CodPais: number

  @column()
  declare NombrePais: string

  @column()
  declare Comunitario: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
