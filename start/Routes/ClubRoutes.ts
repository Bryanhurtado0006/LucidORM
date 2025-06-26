import Route from '@adonisjs/core/services/router'
import ClubController from "../../app/controllers/ClubController.js";

const auth = new ClubController()

Route.post('/club', auth.crearClub)
Route.get('/club', auth.listarClub)
Route.get('/club/:cod_club', auth.listarClubId)
Route.put('/club/:cod_club',auth.actualizar)
Route.get('/conteoClub',auth.contarClub)