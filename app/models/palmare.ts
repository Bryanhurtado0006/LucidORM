import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/build'

export default class Palmare extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}