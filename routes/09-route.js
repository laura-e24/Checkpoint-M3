const router = require("express").Router();
const findBook = require("../controllers/03-controller");
// No modificar arriba de esta línea

/*
  1️⃣0️⃣ ***EJERCICIO 09*** PUT /books 1️⃣0️⃣
      ❕ CONSIGNA ❕
    1 - Integrar la función findBook que desarrollaste previamente para traer los libros

    2 - Responder con los mensajes adecuados en el caso de que se haya modificado un libro con exito o en el caso de que hubiese un error.

    📢 PUNTOS A TENER EN CUENTA 📢
    - Si algo falla al traer los books, debes responder con el mensaje del error!
*/

router.put("/books", (req, res) => {
  const { name, author, stock, rating, admission, genre } = req.body.book;

  try {
    if (!name || !author || stock === undefined || rating === undefined|| !admission|| !genre) {
      return res.status(400).json({ error: 'falta completar datos'});
    }
    findBook(req.body.book)
    res.json({ message: "Libro actualizado correctamente" })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
});

// No modificar nada debajo de esta línea
module.exports = router;
