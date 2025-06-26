/*logica de negocio consultar utilizando funciones
create,query listar*/
//importacion del modelo where,find
import Paise from "../models/paise.ts";

class PaisService{
    async crear(datos){
        return await Paise.create(datos)
    }
    async listar(){
        return await Paise.query()

    }
    async listarId(cod_pais){
        return await Paise.query().where('cod_pais',cod_pais)
    }
    async actualizar(cod_pais:number, datos:{nombre_pais, comunitario}) {
    const lista = await Paise.query().where('cod_pais', cod_pais)
    if(lista){
        lista.nombre_pais=datos.nombre_pais;
        lista.comunitario=datos.comunitario
    }
    await lista.save()
    return lista
}
/*
async actualizar(cod_pais, datos) {
    const lista = await Paise.query().where('cod_pais', cod_pais).firstOrFail()

    lista.merge(datos)
    await lista.save()
    return lista
}
*/
}
export default PaisService;