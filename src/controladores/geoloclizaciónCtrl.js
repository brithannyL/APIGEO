import { conmysql } from '../db.js';

// Obtener todas las geolocalizaciones (GET)
export const getGeolocalizaciones = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM tb_geolocalizacion');
        res.json({ datos: result, message: "Consulta realizada con éxito" });
    } catch (error) {
        return res.status(500).json({ datos: null, message: "Error al consultar geolocalizaciones" });
    }
};

// Obtener una geolocalización por ID (GET)
export const getGeolocalizacionById = async (req, res) => {
    try {
        const [result] = await conmysql.query(
            'SELECT * FROM tb_geolocalizacion WHERE geo_id = ?',
            [req.params.id]
        );
        if (result.length <= 0) return res.status(404).json({ message: "Geolocalización no encontrada" });
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: "Error del servidor" });
    }
};

// Crear una nueva geolocalización (POST)
export const postGeolocalizacion = async (req, res) => {
    try {
        const { geo_latitud, geo_longitud } = req.body;
        const [result] = await conmysql.query(
            'INSERT INTO tb_geolocalizacion (geo_latitud, geo_longitud) VALUES (?, ?)',
            [geo_latitud, geo_longitud]
        );
        res.json({ id: result.insertId, message: "Geolocalización creada con éxito" });
    } catch (error) {
        return res.status(500).json({ message: "Error del servidor" });
    }
};

// Actualizar geolocalización (PUT)
export const putGeolocalizacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { geo_latitud, geo_longitud } = req.body;
        const [result] = await conmysql.query(
            'UPDATE tb_geolocalizacion SET geo_latitud = ?, geo_longitud = ? WHERE geo_id = ?',
            [geo_latitud, geo_longitud, id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ message: "Geolocalización no encontrada" });
        res.json({ message: "Geolocalización actualizada con éxito" });
    } catch (error) {
        return res.status(500).json({ message: "Error del servidor" });
    }
};

// Actualizar parcialmente una geolocalización (PATCH)
export const patchGeolocalizacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { geo_latitud, geo_longitud } = req.body;
        const [result] = await conmysql.query(
            'UPDATE tb_geolocalizacion SET geo_latitud = IFNULL(?, geo_latitud), geo_longitud = IFNULL(?, geo_longitud) WHERE geo_id = ?',
            [geo_latitud, geo_longitud, id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ message: "Geolocalización no encontrada" });
        res.json({ message: "Geolocalización actualizada parcialmente con éxito" });
    } catch (error) {
        return res.status(500).json({ message: "Error del servidor" });
    }
};

// Eliminar geolocalización (DELETE)
export const deleteGeolocalizacion = async (req, res) => {
    try {
        const [result] = await conmysql.query('DELETE FROM tb_geolocalizacion WHERE geo_id = ?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: "Geolocalización no encontrada" });
        res.json({ message: "Geolocalización eliminada con éxito" });
    } catch (error) {
        return res.status(500).json({ message: "Error del servidor" });
    }
};
export const getMedidasByGeolocalizacion = async (req, res) => {
    try {
        const [result] = await conmysql.query(
            'SELECT * FROM tb_medidas WHERE geo_id = ?',
            [req.params.id]
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: "Error al consultar medidas" });
    }
};

// Obtener todos los títulos relacionados con una geolocalización (GET)
export const getTitulosByGeolocalizacion = async (req, res) => {
    try {
        const [result] = await conmysql.query(
            'SELECT * FROM tb_titulos WHERE geo_id = ?',
            [req.params.id]
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: "Error al consultar títulos" });
    }
};

// Agregar una medida relacionada con una geolocalización (POST)
export const postMedida = async (req, res) => {
    try {
        const { med_valor, geo_id } = req.body;
        const [result] = await conmysql.query(
            'INSERT INTO tb_medidas (med_valor, geo_id) VALUES (?, ?)',
            [med_valor, geo_id]
        );
        res.json({ id: result.insertId, message: "Medida creada con éxito" });
    } catch (error) {
        return res.status(500).json({ message: "Error al crear medida" });
    }
};

// Agregar un título relacionado con una geolocalización (POST)
export const postTitulo = async (req, res) => {
    try {
        const { tit_titulo, geo_id } = req.body;
        const [result] = await conmysql.query(
            'INSERT INTO tb_titulos (tit_titulo, geo_id) VALUES (?, ?)',
            [tit_titulo, geo_id]
        );
        res.json({ id: result.insertId, message: "Título creado con éxito" });
    } catch (error) {
        return res.status(500).json({ message: "Error al crear título" });
    }
};
