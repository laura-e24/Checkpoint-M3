const router = require('express').Router();
const addBook = require('../controllers/01-controller')
// No modificar nada arriba de esta línea

/*
  8️⃣ ***EJERCICIO 8*** POST /books 8️⃣
      ❕ CONSIGNA ❕
    1 - Integrar la función addBook que desarrollaste previamente para crear un nuevo libro.
    2 - Responder con un objeto el msg: "(la base de datos actualizada)"
    📢 PUNTOS A TENER EN CUENTA 📢
    - Si algo falla al crear una categoría, debes responder con un status code 400 y el mensaje del error!
*/

router.post('/books', (req, res) => {
  const { book } = req.body;

  try {
    const add = addBook(book)
    res.status(201).json({ msg: add })
  } catch (error) {
    return res.status(400).json({err: "ya esta el libro en la base de datos."})
  }
})

// No modificar nada debajo de esta línea
module.exports = router;
