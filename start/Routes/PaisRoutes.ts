import PaisController from "#controllers/PaisController";
import router from "@adonisjs/core/services/router";

const pais = new PaisController()

router.post('/pais', pais.crearPais)

router.get('/pais',pais.listarPais)

router.get('/pais/:cod_pais',pais.listarPaisId)

router.put('/pais/:cod_pais',pais.actualizarPais)
