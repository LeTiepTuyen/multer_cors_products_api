# Product API

This is a simple **Product Management API** built with **Express.js**, **EJS**, **MongoDB**, and **Tailwind CSS**. The project is designed to showcase products on a homepage in a card-list layout and provide full CRUD operations (Create, Read, Update, Delete) for managing product data.

## Features

- **Homepage Display**:
  - Lists products with details such as name, description, price, category, and image in a user-friendly layout.
- **CRUD Operations**:
  - **Create**: Add new products using a modal form.
  - **Read**: View the list of products.
  - **Update**: Edit product details using a modal form.
  - **Delete**: Remove a product with a confirmation dialog.
- **Responsive UI**:
  - Styled with **Tailwind CSS** for a clean and responsive interface.
- **Database Integration**:
  - Products are stored and managed in a **MongoDB** collection.
- **Image Upload**:
  - Uses **Multer** for handling product image uploads.

---

## Tech Stack

- **Backend**: Node.js, Express.js, Mongoose
- **Frontend**: EJS, Tailwind CSS
- **Database**: MongoDB
- **Utilities**: dotenv, concurrently, nodemon, multer

---


## Project Structure

- **controllers/**       # Contains controllers for handling API logic  
- **models/**            # Database schemas (e.g., Product schema)  
- **public/**            # Static files and Tailwind CSS output  
- **routes/**            # API routes for CRUD operations  
- **uploads/**           # Directory for uploaded product images  
- **views/**             # EJS templates for rendering the UI  
- **.env**               # Environment configuration  
- **app.js**             # Main application entry point  
- **database.js**        # MongoDB connection setup  
- **package.json**       # Project dependencies and scripts  
- **seed.js**            # Script to seed initial data into the database  
- **tailwind.config.js** # Tailwind CSS configuration  



---

## Installation and Setup

Follow these steps to set up the project locally:

### Prerequisites

1. **Node.js** (v14 or later)
2. **MongoDB** (Ensure you have a running MongoDB instance)
3. **npm** (Node package manager)

---

### Steps to Run the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/YourUsername/product-api.git
   cd product-api
   ```
2. **Install Dependencies**

Run the following command to install the required packages:
  
  ```bash
  npm install
  ```


3. **Setup Environment Variables**

Create a `.env` file in the root directory and configure the following variables:

```env
MONGO_URI=mongodb://localhost:27017/product-api
PORT=3000
```

4. **Start the Application**

Use the following command to start the development server:

```bash
npm run dev
```

5. **Access the Application**

Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the homepage.

## CRUD Workflow

- **Create**: Use the "Add Product" button on the homepage to open a modal and submit product details.
- **Read**: View all products in a table format on the homepage.
- **Update**: Click the "Edit" button next to a product to open a modal and update its details.
- **Delete**: Click the "Delete" button and confirm the action to remove a product.

## Product Schema

The MongoDB schema for products is defined as follows:

```javascript
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  category: { type: String, required: true },
  stock: { type: Number, default: 0 }
}, { timestamps: true });
```

## Dependencies

### Main Dependencies
- `express`: Web framework for Node.js
- `mongoose`: MongoDB object modeling tool
- `dotenv`: Environment variable management
- `multer`: Middleware for handling file uploads
- `body-parser`: Middleware to parse incoming request bodies
- `cors`: Middleware for enabling CORS

### Dev Dependencies
- `tailwindcss`: Utility-first CSS framework
- `concurrently`: Run multiple commands concurrently
- `nodemon`: Automatically restarts the server on file changes
- `autoprefixer`: PostCSS plugin for adding vendor prefixes
- `postcss`: CSS transformations


## Author

**Tuyen Tiep Le**

Feel free to connect or raise issues for any questions!

