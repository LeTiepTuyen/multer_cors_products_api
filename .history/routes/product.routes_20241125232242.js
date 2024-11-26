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

// Middleware để kiểm tra và debug dữ liệu
const debugFormData = (req, res, next) => {
  console.log('req.body:', req.body);
  console.log('req.file:', req.file);
  next();
};

// Route to create a new product
router.post('/', upload.single('image'), debugFormData, productController.createProduct);

// Các route khác giữ nguyên
router.get('/', productController.getAllProducts);
router.post('/:id', upload.single('image'), productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
