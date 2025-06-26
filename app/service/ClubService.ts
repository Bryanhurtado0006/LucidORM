// ClubService.ts
import Clube from "../models/clube.ts";

export default class ClubService {
  async crear(data) {
    return await Clube.create(data);
  }

  async listar() {
    return await Clube.query();
  }

  async buscarId(cod_club) {
    return await Clube.query().where('cod_club', cod_club); 
  }

  async actualizar(cod_club, data) {
    const resp = await Clube.findByOrFail(cod_club); 
    resp.merge(data);
    return await resp.save();
  }

  async eliminar(cod_club) {
    const resp = await Clube.findByOrFail(cod_club);
    return await resp.delete();}


  async conteo(){
    const res =await Clube.query().count("* as conteo")
    return res[0].$extras.conteo}
}
