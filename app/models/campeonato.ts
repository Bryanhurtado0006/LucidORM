import { DateTime } from 'luxon'
import { BaseModel, column,belongsTo } from '@adonisjs/lucid/orm'
import type {BelongsTo} from '@adonisjs/lucid/types/relations'
import Pais from '#models/paise'

export default class Campeonato extends BaseModel {
  @column({ isPrimary: true })
  declare CodCamp: number

  @column()
  declare NombreCamp: string

  @column()
  declare CodPais: number

  @belongsTo(() => Pais)
  declare pais: BelongsTo<typeof Pais>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
