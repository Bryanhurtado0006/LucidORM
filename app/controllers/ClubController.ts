import ClubService from "../service/ClubService.ts";

const clubServices = new ClubService();

class ClubController {
  async crearClub({ request, response }) {
    try {
        /*use request.only() en lugar de desestructurar 
        request.body() directamente, asi evito recibir campos inesperados*/
      const data = request.only([ 
        "nombre",
        "direccion",
        "poblacion",
        "provincia",
        "cos_postal",
        "telefono",
        "colores",
        "himno",
        "fax",
        "anioFundacion",
        "presupuesto",
        "presidente",
        "vicepresidente",
      ]); 
      const nuevoClub = await clubServices.crear(data);


      return response.json({ msj: "datos creados", datos: nuevoClub });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async listarClub({ response }) {
    try {
      const list = await clubServices.listar();
      return response.json({ msj: list });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async listarClubId({ params, response }) {
    try {
      const cod_club = params.cod_club;
      const club = await clubServices.buscarId(cod_club);
      return response.json({ mensaje: club });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}

export default ClubController;


