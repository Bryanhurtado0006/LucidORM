import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Vehiculo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare placa:string
  @column() declare tipo:string
  @column() declare propietario:string
 

  
}