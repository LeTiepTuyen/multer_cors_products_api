const express = require('express');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./configs/database');
require('dotenv').config();
const cors = require('cors');

const productRoutes = require('./routes/product.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectDB();

// Routes
app.use('/', productRoutes);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).render('error', { message: 'Page not found.' });
});

// Handle server errors
app.use((err, req, res, next) => {
  console.error('Internal Server Error:', err);
  res.status(500).render('error', { message: 'Internal server error.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});