
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Sample products data
const products = [
  {
    name: 'Apple iPhone 13',
    description: 'Latest model of Apple iPhone',
    price: 999.99,
    image: '/uploads/iphone13.jpg',
    category: 'Electronics',
    stock: 50
  },
  {
    name: 'Samsung Galaxy S21',
    description: 'Latest model of Samsung Galaxy',
    price: 899.99,
    image: '/uploads/galaxys21.jpg',
    category: 'Electronics',
    stock: 40
  },
  {
    name: 'Sony WH-1000XM4',
    description: 'Noise-cancelling wireless headphones',
    price: 349.99,
    image: '/uploads/sonywh1000xm4.jpg',
    category: 'Electronics',
    stock: 30
  },
  {
    name: 'Dell XPS 13',
    description: 'High-performance laptop',
    price: 1199.99,
    image: '/uploads/dellxps13.jpg',
    category: 'Computers',
    stock: 20
  },
  {
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes',
    price: 149.99,
    image: '/uploads/nikeairmax270.jpg',
    category: 'Footwear',
    stock: 100
  },
  {
    name: 'Adidas Ultraboost 21',
    description: 'High-performance running shoes',
    price: 179.99,
    image: '/uploads/adidasultraboost21.jpg',
    category: 'Footwear',
    stock: 80
  }
];

// Seed the database
Product.insertMany(products)
  .then(() => {
    console.log('Products seeded successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error seeding products:', err);
    mongoose.connection.close();
  });