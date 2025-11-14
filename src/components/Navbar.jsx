import { AiOutlineArrowLeft } from "react-icons/ai";

function Navbar({ cartCount, onCartClick, showBackButton, onBack }) {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">🛍</span>
          </div>
          <h1 className="text-2xl font-bold">ShopHub</h1>
        </div>

        <div className="flex items-center gap-3">
          {showBackButton && (
            <button
              className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
              onClick={onBack}
            >
              <AiOutlineArrowLeft className="text-xl" />
              Back
            </button>
          )}

          <button
            onClick={onCartClick}
            className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            <span>🛒</span>
            <span>Cart ({cartCount})</span>
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
