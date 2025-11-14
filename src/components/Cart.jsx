import { AiOutlineArrowLeft } from "react-icons/ai";

function Cart({ items, onRemove, onUpdateQuantity, onCheckout, onBack }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // EMPTY CART UI
  if (items.length === 0) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-6 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <AiOutlineArrowLeft className="text-xl" />
          Back
        </button>

        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-xl sm:text-2xl text-gray-600 mb-4">Your cart is empty</p>
          <p className="text-gray-500 text-sm sm:text-base">
            Start shopping to add items to your cart
          </p>
        </div>
      </main>
    );
  }

  // CART HAS ITEMS
  return (
    <main className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">

      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-6 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        <AiOutlineArrowLeft className="text-xl" />
        Back
      </button>

      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">Shopping Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4 mb-8">
        {items.map(item => (
          <div
            key={item.id}
            className="bg-gray-50 p-4 rounded-lg border border-gray-200 
                       flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            {/* Item Details */}
            <div className="flex-1">
              <h3 className="font-semibold text-black mb-1 text-lg">{item.name}</h3>
              <p className="text-gray-600 text-sm">${item.price.toFixed(2)} each</p>
            </div>

            {/* Quantity Control */}
            <div className="flex items-center gap-3 mx-0 sm:mx-4">
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-200 transition"
              >
                −
              </button>

              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  onUpdateQuantity(item.id, parseInt(e.target.value) || 1)
                }
                className="w-14 text-center border border-gray-300 rounded py-1"
              />

              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-200 transition"
              >
                +
              </button>
            </div>

            {/* Item Total */}
            <div className="text-left sm:text-right min-w-[70px]">
              <p className="font-semibold text-black text-base sm:text-lg">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => onRemove(item.id)}
              className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm font-semibold w-fit"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="bg-black text-white p-6 rounded-lg mb-6">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm sm:text-base">
            <span>Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-gray-400 text-xs sm:text-sm">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="border-t border-gray-600 pt-2 mt-2 flex justify-between text-base sm:text-lg font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={onCheckout}
          className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition text-base"
        >
          Proceed to Checkout
        </button>
      </div>

      <p className="text-center text-gray-600 text-xs sm:text-sm pb-8">
        Items in cart will be cleared after successful checkout
      </p>
    </main>
  );
}

export default Cart;
