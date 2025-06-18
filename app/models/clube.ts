import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { BelongsTo } from '@adonisjs/lucid/build/src/types/relations'

export default class Clube extends BaseModel {
  @column({ isPrimary: true })
  declare CodClub: number 
  @column()
  declare club:string

   @column()
  declare nombre: string

  @column()
  declare direccion: string

  @column()
  declare provincia: string

  @column()
  declare CosPostal: string

  @column()
  declare Tlfno: string

  @column()
  declare colores: string

  @column()
  declare himno: string

  @column()
  declare : string

  @column()
  declare añoFundacion: number

  @column()
  declare presupuesto: number

  @column()
  declare presidente: string

  @column()
  declare vicepresidente: string



  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTO(()=> Clube)
  declare clubes:BelongsTo<typeof Clube>
}