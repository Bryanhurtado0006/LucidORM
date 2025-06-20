import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

import Estadio from './estadio.js'
import Jugadore from './jugadore.js'
import Entrenadore from './entrenadore.js'


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
  declare fax: string

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

 /* @belongsTo(()=> Clube)
  declare clubes:BelongsTo<typeof Clube>*/

  //estadios

  @hasMany(() => Estadio, {
    foreignKey: 'cod_club',
  })
  declare estadios: HasMany<typeof Estadio>

  //jugadores
  @hasMany(() => Jugadore, {
  foreignKey: 'cod_club',
})
declare jugadores: HasMany<typeof Jugadore>

//emtrenadores 
@hasMany(() => Entrenadore, {
  foreignKey: 'cod_club',
})
declare entrenadores: HasMany<typeof Entrenadore>

}