import { useState, useEffect } from 'react'
import Navbar from '././components/Navbar'
import ProductGrid from '././components/ProjectGrid'
import Cart from '././components/Cart'
import data from '././assets/products.json'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // Load products from JSON
    const loadProducts = async () => {
      try {
        // const response = await fetch('/products.json')
        // const data = await response.json()
        setProducts(data.products)
        
        const uniqueCategories = ['All', ...new Set(data.products.map(p => p.category))]
        setCategories(uniqueCategories)
      } catch (error) {
        console.error('Error loading products:', error)
      }
    }

    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }

    loadProducts()
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      )
    }
  }

  const checkout = () => {
    // Clear cart after checkout
    setCart([])
    localStorage.removeItem('cart')
    setShowCart(false)
    alert('Thank you for your purchase! Your cart has been cleared.')
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar
      cartCount={cart.length}
      onCartClick={() => setShowCart(!showCart)}
       />
      
      {showCart ? (
        <Cart
          items={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onCheckout={checkout}
          onBack={()=> setShowCart(false)}
        
        />
      ) : (
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-black">Shop Our Collection</h1>
            <p className="text-gray-600 mt-2">Discover premium products at unbeatable prices</p>
          </div>
          
          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <ProductGrid
            products={products}
            selectedCategory={selectedCategory}
            onAddToCart={addToCart}
          />
        </main>
      )}
    </div>
  )
}

export default App
