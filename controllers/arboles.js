const client = require("../database/db.js");

const getArboles = async() => {
  try {
    let text = `SELECT
    a.nombre_arbol,
    a.ubicacion_id,
    a.arbol_id
    FROM
    roket.arboles a;`;
    const arboles = await client.query(text);
    return arboles.rows; 
  } catch (error) {
    throw error; 
  }
}

const getArbolesByID = async(arbol) => {
  const {arbol_id} = arbol
  const consulta = `
  SELECT
    a.nombre_arbol,
    a.arbol_id,
    f.url_foto,
    u.latitud AS lat,
    u.longitud AS lng
  FROM
      roket.arboles a
  JOIN
      roket.ubicaciones u ON a.ubicacion_id = u.ubicacion_id
  JOIN
      roket.fotos f ON a.arbol_id = f.arbol_id
  WHERE
      a.arbol_id = $1;
  `;
  try {
    const resultado = await client.query(consulta, [arbol_id]);
    if(resultado.rows.length <= 0) throw new Error("Arbol no encontrado")
    return resultado.rows;
  } catch (error) {
    console.error('Error en la consulta:', error);
    throw error;
  }
}

const insertComentario = async(data) => {
  try {
    // dato postulante INT = 1 invariable, por propositos de test
    // si se quiere modificar, recibir postulante(INT) por req.body
    const {comentario, arbol_id, postulante_id} = data.data;
    if(!comentario || !arbol_id || !postulante_id) throw new Error("Faltan datos para ingresar, datos necesarios: Comentario(TEXT), arbol(INT)");

    // envio de comentario a db 
    const insert = await client.query("insert into comentario(arbol_id, postulante_id, comentario) values($1, $2, $3) returning *", [arbol, postulante, comentario]);
    if(insert.rowCount > 0) return {message: "Comentario Ingresado Correctamente"}
    else throw new Error( "No se pudo ingresar su comentario");
  } catch (error) {
    throw error    
  }
}

module.exports = {getArboles, insertComentario, getArbolesByID}