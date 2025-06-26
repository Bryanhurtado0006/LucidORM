import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'



import Clube from './clube.ts'

//CONECTAR LA BASE DE DATOS CON MI PROYECTO BACKEND 
export default class Estadio extends BaseModel {
  @column({ isPrimary: true })
  declare cod_estadios: number


  @column()
  declare estadio:string

  @column()
  declare direccion:string

  @column()
  declare cod_postal:string

  @column()
  declare poblacion:string

  @column()
  declare provincia:string

  @column()
  declare capacidad:number

  @column()
  declare sentados:number

  @column()
  declare inauguracion:Date

   @column()
  declare cod_club: number 

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  //relacion hasmany
  @belongsTo(() => Clube, { foreignKey: 'cod_club' })
declare club: BelongsTo<typeof Clube>

}