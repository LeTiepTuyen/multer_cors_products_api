const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Route to display the product management page
router.get('/', productController.getAllProducts);

// Route to create a new product
router.post('/', upload.single('image'), productController.createProduct);

// Route to update a product by ID
router.post('/:id', productController.updateProduct);

// Route to delete a product by ID
router.delete('/:id', productController.deleteProduct);

module.exports = router;