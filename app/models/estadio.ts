import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { HasMany } from '@adonisjs/lucid/build/src/types/relations'
//CONECTAR LA BASE DE DATOS CON MI PROYECTO BACKEND 
export default class Estadio extends BaseModel {
  @column({ isPrimary: true })
  declare CodEstadios: number


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

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  //relacion hasmany
  @hasMany(() => Estadio)
  declare estadio:HasMany<typeof Estadio>
}