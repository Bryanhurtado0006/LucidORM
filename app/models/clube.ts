import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, type HasMany } from '@adonisjs/lucid/orm'
import Estadio from './estadio.ts'

export default class Clube extends BaseModel {
  @column({ isPrimary: true })
  declare cod_club: number

  @column()
  declare club: string

  @column()
  declare nombre: string

  @column()
  declare direccion: string 

  @column()
  declare poblacion: string 

  @column()
  declare provincia: string 

  @column()
  declare CosPostal: string 

  @column()
  declare TLfno: string 

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

  @hasMany(()=>Estadio,{
    foreignKey:'cod_club',
  })
  declare estadios:HasMany<typeof Estadio>
 
}