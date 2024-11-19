import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import geolocalizacionRoutes from './routes/geolocalizacion.routes.js'; // Ruta de la API de geolocalización

// Definir módulo de ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configuración de CORS
const corsOptions = {
    origin: '*', // Cambia a tu dominio en producción
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json()); // Para procesar JSON en las solicitudes
app.use(express.urlencoded({ extended: true })); // Para procesar formularios

// Rutas de la API
app.use('/api', geolocalizacionRoutes); // Ruta para geolocalización

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({
        message: 'Endpoint not found',
    });
});

// Manejo de errores generales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Internal server error',
        error: err.message,
    });
});

// Exportar la aplicación
export default app;
