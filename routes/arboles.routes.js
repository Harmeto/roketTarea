const router = require('express').Router();
const { getArboles, insertComentario, getArbolesByID } = require('../controllers/arboles.js');

router.get('/arboles', async (req, res) =>{
  try {
    const arboles = await getArboles();
    if(arboles) res.json(arboles);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

router.post('/comentario', async(req, res) => {
  try {
    const insert = await insertComentario(req.body);
    res.json(insert)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

router.post('/arbol-by-id', async(req, res) => {
  try {
    const search = await getArbolesByID(req.body);
    res.json(search);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

module.exports = router;

