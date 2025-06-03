const express = require("express");
const router = express.Router();
const products = require("../controllers/product.controller");

// Rutas CRUD 
router.post("/", products.create);
router.get("/", products.findAll);
router.get("/:id", products.findOne);
router.put("/:id", products.update);
router.delete("/:id", products.delete);

// **Rutas adicionales 
router.get("/search/name", products.findByName); 
router.get("/search/stock", products.findByStock); 

module.exports = router;