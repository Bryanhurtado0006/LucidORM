
import EstadioService from "../service/EstadioService.ts"
const estadioService = new EstadioService()

export default class EstadioController {
  async crearEstadio({ request, response }) {

    try {
      const data = request.only([
        'estadio',
        'direccion',
        'cod_postal',
        'poblacion',
        'provincia',
        'capacidad',
        'sentados',
        'inauguracion',
        'cod_club'
      ])

      const nuevo = await estadioService.crear(data)


      return response.status(201).json({ msj: "Estadio creado", datos: nuevo })

    } catch (error) {

      return response.status(500).json({ error: error.message })
    }
  }

  async listarEstadios({ response }) {
    try {
      const lista = await estadioService.listar()
      return response.json({ msj: lista })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }

  async obtenerEstadioPorId({ params, response }) {
    try {
      const { cod_estadios } = params
      const estadio = await estadioService.buscarId(cod_estadios)
      return response.json({ msj: estadio })
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }

  async actualizarEstadio({ params, request, response }) {
    try {
      const { cod_estadios } = params
      const data = request.only([
        'estadio',
        'direccion',
        'cod_postal',
        'poblacion',
        'provincia',
        'capacidad',
        'sentados',
        'inauguracion',
        'cod_club'
      ])
      const actualizado = await estadioService.actualizar(cod_estadios, data)
      return response.json({ msj: "Estadio actualizado", datos: actualizado })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }

  async eliminarEstadio({ params, response }) {
    try {
      const { cod_estadios } = params
      await estadioService.eliminar(cod_estadios)
      return response.json({ msj: "Estadio eliminado correctamente" })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }
}