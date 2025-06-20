import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Clube from './clube.js'

export default class Entrenadore extends BaseModel {
  @column({ isPrimary: true })
  declare CodEntrenador: number

  @column()
  declare nombre: string

  @column()
  declare experiencia: string

  @column()
  declare nacionalidad: string

  @column()
  declare cod_club: number

  @belongsTo(() => Clube, {
    foreignKey: 'cod_club',
  })
  declare club: BelongsTo<typeof Clube>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}