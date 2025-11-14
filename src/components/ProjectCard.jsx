import { useState } from 'react'

function ProductCard({ product, onAddToCart }) {
  const [isAdding, setIsAdding] = useState(false)

  const handleAddClick = () => {
    setIsAdding(true)
    onAddToCart(product)
    setTimeout(() => setIsAdding(false), 600)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${product.price}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Stock Status */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
            {product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out'}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddClick}
          disabled={product.stock === 0 || isAdding}
          className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 ${
            isAdding
              ? 'bg-green-500 text-white'
              : product.stock === 0
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          {isAdding ? '✓ Added!' : product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
