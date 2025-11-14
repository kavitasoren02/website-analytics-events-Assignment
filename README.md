## 🛍️ FRONTEND: E-Commerce Application
This project is a fully functional e-commerce frontend built with React, Vite, and Tailwind CSS, designed to demonstrate modern frontend development practices such as component structure, state management, and persistent storage.

### Features

- *Product Catalog*: Browse products with detailed information
- *Shopping Cart*: Add/remove items, update quantities
- *LocalStorage Integration*: Cart data persists across sessions
- *Checkout System*: Clear cart after successful purchase
- *Responsive Design*: Mobile-first UI with Tailwind CSS
- *No UI Libraries*: Pure Tailwind CSS styling

### Tech Stack

- *Framework*: React 18
- *Bundler*: Vite
- *Styling*: Tailwind CSS v4
- *State Management*: React Hooks + localStorage

### Product Filtering
The application includes a dynamic product filtering feature, allowing users to narrow down the product list based on specific criteria. This improves the user experience by helping customers quickly find what they are looking for.

### Quick Start

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will open at http://localhost:5173

### File Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Header with cart button
│   │   ├── ProductGrid.jsx      # Grid layout for products
│   │   ├── ProductCard.jsx      # Individual product card
│   │   └── Cart.jsx             # Shopping cart view
│   ├── App.jsx                  # Main app component
│   ├── App.css
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles + Tailwind
├── products.json                # Dummy product data
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

### Product Data Format

```json
{
  "id": 1,
  "name": "Product Name",
  "description": "Product description",
  "price": 199.99,
  "image": "/placeholder.svg",
  "category": "Electronics",
  "stock": 15
}
```

### LocalStorage Schema

Cart is stored in localStorage as:
```json
[
  {
    "id": 1,
    "name": "Product Name",
    "price": 199.99,
    "quantity": 2
  }
]
```