/* consultas referenciadas al modelo utlizando ORM luci  */
import Clube from "../models/clube.js";

export default class ClubService{
    async crear(data: Partial<Clube>){
        return await Clube.create(data)
    }

    async listar(){
        return await Clube.query()
    }

            /*

      async  buscarId(id:integer){
           return await Clube.query().where('CodClub',id)
        }

        actualizar(id:integer, data<Clube>){
            
            const resp = await Clube.findByOrFail(id)
            return await resp.merge(data).save()
        }

        async eliminar(id:integer, data){
            const resp = await Clube.findByOrFail(id)
            return await resp.delete()
                }*/
}