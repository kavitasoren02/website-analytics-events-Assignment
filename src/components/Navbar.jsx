
function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="bg-black text-white sticky top-0 z-100">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">🛍</span>
          </div>
          <h1 className="text-2xl font-bold">ShopHub</h1>
        </div>

        <button
          onClick={onCartClick}
          className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          <span>🛒</span>
          <span>Cart ({cartCount})</span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
