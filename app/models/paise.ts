import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, type HasMany } from '@adonisjs/lucid/orm'
import Jugadore from './jugadore.js'


export default class Paise extends BaseModel {
  @column({ isPrimary: true })
  declare cod_pais: number

  @column()
  declare nombre_pais:string

  @column()
  declare comunitario:boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Jugadore,{
    foreignKey:'cod_pais',
  })
  declare jugadores:HasMany<typeof Jugadore>
}