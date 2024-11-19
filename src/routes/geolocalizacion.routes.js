import express from 'express';
import {
    getGeolocalizaciones,
    getGeolocalizacionById,
    postGeolocalizacion,
    putGeolocalizacion,
    patchGeolocalizacion,
    deleteGeolocalizacion,
    getMedidasByGeolocalizacion,
    getTitulosByGeolocalizacion,
    postMedida,
    postTitulo,
    getTitulos
} from '../controladores/geoloclizaciónCtrl.js';

const router = express.Router();

// Rutas para tb_geolocalizacion
router.get('/geolocalizaciones', getGeolocalizaciones);
router.get('/geolocalizaciones/:id', getGeolocalizacionById);
router.post('/geolocalizaciones', postGeolocalizacion);
router.put('/geolocalizaciones/:id', putGeolocalizacion);
router.patch('/geolocalizaciones/:id', patchGeolocalizacion);
router.delete('/geolocalizaciones/:id', deleteGeolocalizacion);

// Rutas para tb_medidas y tb_titulos
router.get('/geolocalizaciones/:id/medidas', getMedidasByGeolocalizacion);
router.get('/geolocalizaciones/:id/titulos', getTitulosByGeolocalizacion);
router.post('/geolocalizaciones/:id/medidas', postMedida);
router.post('/geolocalizaciones/:id/titulos', postTitulo);
router.get('/titulos', getTitulos);

export default router;
