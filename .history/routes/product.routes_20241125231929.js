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
  },
});

const upload = multer({ storage: storage });

// Middleware để parse các trường text từ form-data
const parseFormData = (req, res, next) => {
  if (req.body) {
    Object.keys(req.body).forEach((key) => {
      if (req.body[key] && typeof req.body[key] === 'string') {
        req.body[key] = req.body[key].trim(); // Loại bỏ khoảng trắng thừa
      }
    });
  }
  next();
};

// Route to display the product management page
router.get('/', productController.getAllProducts);

// Route to create a new product
router.post('/', upload.single('image'), parseFormData, productController.createProduct);

// Route to update a product by ID
router.post('/:id', upload.single('image'), parseFormData, productController.updateProduct);

// Route to delete a product by ID
router.delete('/:id', productController.deleteProduct);

module.exports = router;
