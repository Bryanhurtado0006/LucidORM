import Route from '@adonisjs/core/services/router'
import ClubController from "../../app/controllers/ClubController.js";

const auth = new ClubController()

Route.post('/club', auth.crearClub)
Route.get('/club', auth.listarClub)
Route.get('/club/id', auth.listarClubId)