import Estadio from "../models/estadio.ts";

export default class EstadioService {
  async crear(data) {
    return await Estadio.create(data)
  }

  async listar() {
    return await Estadio.query().preload('club') // para traer datos del club asociado
  }

  async buscarId(cod_estadios: number) {
    return await Estadio.query()
      .where('cod_estadios', cod_estadios)
      .preload('club')
      .firstOrFail()
  }

  async actualizar(cod_estadios: number, data) {
    const estadio = await Estadio.findOrFail(cod_estadios)
    estadio.merge(data)
    return await estadio.save()
  }

  async eliminar(cod_estadios: number) {
    const estadio = await Estadio.findOrFail(cod_estadios)
    return await estadio.delete()
  }

 async conteo(){
    const res =await Estadio.query().count("* as conteo")
    return res[0].$extras.conteo}

}