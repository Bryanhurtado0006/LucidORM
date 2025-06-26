import Route from '@adonisjs/core/services/router'

import EstadioController from '#controllers/EstadioController'

const estadioController = new EstadioController()

Route.post('/estadios', estadioController.crearEstadio)
Route.get('/estadios', estadioController.listarEstadios)
Route.get('/estadios/:cod_estadios', estadioController.obtenerEstadioPorId)
Route.put('/estadios/:cod_estadios', estadioController.actualizarEstadio)
Route.delete('/estadios/:cod_estadios', estadioController.eliminarEstadio)
Route.get('/conteoestadios',estadioController.contarestadio)    