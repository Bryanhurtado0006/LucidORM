import PaisService from "../service/PaisService.ts";
//instancia
const paisservice = new PaisService()
class PaisController{

    
    async crearPais({request,response}){
        try{
            const {nombre_pais,comunitario}=request.body()
            const nuevo=await paisservice.crear({nombre_pais,comunitario})
            return response.json({msj:"datos creados",datos:nuevo})

        } catch(error){
            return response.json({error:error.message})
        }
    }
    async listarPais({request,response}){
        try{
            const list = await paisservice.listar()
            return response.json({msj:list})

        }catch(error){
            return response.json({error:error.message})
        }
    }

    async listarPaisId({params,request,response}){
        try{
            const cod_pais=params.cod_pais
            const listaID=await paisservice.listarId(cod_pais)
            return response.json({mensaje:listaID})
            
        }catch(error){
            return response.json({error:error.message})
        }
    }
    async actualizarPais({params,request,response}){
        try{
            const cod_pais=params.cod_pais
            const {nombre_pais,comunitario}=request.body()
            const listado= await paisservice.actualizar(cod_pais,
                {nombre_pais,comunitario})
                return response.json({msj:listado})
        }catch(error){
            return response.json({error:error.message})

        }

    }
}
export default PaisController;