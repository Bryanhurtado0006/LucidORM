import { data } from "react-router-dom";
import ClubService from "../service/ClubService.ts";
import { error } from "console";



const clubServicio=new ClubService() // instancia 
export default class ClubController{
   async crearClub({request,response}){
    try{
        const {nombre,
         direccion,
         poblacion,
         provincia,
         CosPostal,
         Tlfno,
         colores,
         himno,
         fax,
         añoFundacion,
         presupuesto,
         presidente,
         vicepresidente}=request.body()
         
          const nuevoClub=await clubServicio.crear({nombre,
             direccion,
             poblacion,
             provincia,
             CosPostal,
             Tlfno,
             colores,
             himno,
             fax,
             añoFundacion,
             presupuesto,
             presidente,
             vicepresidente
     
         })
         return response.json({msj:"Datos creados",datos:nuevoClub})
         
    } catch{
        return response.json({msj:"ERROR"})
}



    }
    async listarClub({request,response}){

    try {
       const list=await clubServicio.listar()
       return response.json({data:list})
        
    } catch{
        return response.json({error:"Nose pero dio error"})
    }
}
}

