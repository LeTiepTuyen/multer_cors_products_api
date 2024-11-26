const fs = require('fs');
const path = require('path');
const Product = require('../models/product.model');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render('index', { products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new product
exports.createProduct = async (req, res) => {
  try {
    console.log('req.body:', req.body); // Log các trường text
    console.log('req.file:', req.file); // Log file upload

    // Kiểm tra nếu `req.body` không có dữ liệu
    if (!req.body.name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const newProduct = new Product({
      ...req.body,
      price: parseFloat(req.body.price), // Chuyển price về dạng số
      stock: parseInt(req.body.stock, 10), // Chuyển stock về dạng số
      image: req.file ? `/uploads/${req.file.originalname}` : undefined,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};


// Update product by ID
exports.updateProduct = async (req, res) => {
  try {
    console.log('req.body:', req.body); // Log các trường text
    console.log('req.file:', req.file); // Log file upload

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const updatedData = {
      ...req.body,
      price: parseFloat(req.body.price), // Chuyển price về dạng số
      stock: parseInt(req.body.stock, 10), // Chuyển stock về dạng số
      image: req.file ? `/uploads/${req.file.originalname}` : product.image,
    };

    // Xóa file cũ nếu có file mới
    if (req.file && product.image) {
      const oldImagePath = path.join(__dirname, '..', product.image);
      fs.unlink(oldImagePath, (err) => {
        if (err) console.error('Failed to delete old image:', err);
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// Delete product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Xóa file ảnh liên quan
    if (product.image) {
      const imagePath = path.join(__dirname, '..', product.image);
      fs.unlink(imagePath, (err) => {
        if (err) console.error('Failed to delete image:', err);
      });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
