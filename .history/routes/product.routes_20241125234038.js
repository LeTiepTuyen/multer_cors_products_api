const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const multer = require('multer');
const path = require('path');

// Configure multer to keep the original file name
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Route to display the product management page
router.get('/', productController.getAllProducts);

// Route to create a new product
router.post('/', upload.single('image'), productController.createProduct);

// Route to update a product by ID
router.post('/:id', upload.single('image'), productController.updateProduct);

// Route to delete a product by ID
router.delete('/:id', productController.deleteProduct);

// Route to return JSON for testing CORS
router.get('/test-json', productController.getAllProductsJSON);

module.exports = router;