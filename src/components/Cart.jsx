function Cart({ items, onRemove, onUpdateQuantity, onCheckout }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <p className="text-2xl text-gray-600 mb-4">Your cart is empty</p>
          <p className="text-gray-500">Start shopping to add items to your cart</p>
        </div>
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-black mb-8">Shopping Cart</h2>

      <div className="space-y-4 mb-8">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex-1">
              <h3 className="font-semibold text-black mb-1">{item.name}</h3>
              <p className="text-gray-600 text-sm">${item.price.toFixed(2)} each</p>
            </div>

            <div className="flex items-center gap-4 mx-4">
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-200 transition"
              >
                −
              </button>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                className="w-12 text-center border border-gray-300 rounded py-1"
              />
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-200 transition"
              >
                +
              </button>
            </div>

            <div className="text-right min-w-24">
              <p className="font-semibold text-black">${(item.price * item.quantity).toFixed(2)}</p>
            </div>

            <button
              onClick={() => onRemove(item.id)}
              className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm font-semibold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="bg-black text-white p-6 rounded-lg mb-6">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-400 text-sm">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="border-t border-gray-600 pt-2 mt-2 flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={onCheckout}
          className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition"
        >
          Proceed to Checkout
        </button>
      </div>

      <p className="text-center text-gray-600 text-sm">
        Items in cart will be cleared after successful checkout
      </p>
    </main>
  )
}

export default Cart
