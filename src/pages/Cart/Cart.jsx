import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import './Cart.css'; // Custom CSS for other components (if needed)
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart p-5 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="cart-items mb-6">
        <div className="cart-items-title grid grid-cols-6 gap-4 text-sm font-bold text-gray-700">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="my-4" />

        {food_list.map((item) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={item._id} className="cart-items-item grid grid-cols-6 gap-4 items-center py-4 border-b border-gray-200">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>{(item.price * cartItem[item._id])}</p>
                <p
                  onClick={() => removeFromCart(item._id)}
                  className="cursor-pointer text-red-600 hover:text-red-800"
                >
                  X
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom flex justify-between gap-6">
        <div className="cart-total w-2/3">
          <h2 className="text-lg font-semibold text-gray-800">Cart Totals</h2>
          <div className="mt-4">
            <div className="cart-total-details flex justify-between py-2 border-b border-gray-200">
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <div className="cart-total-details flex justify-between py-2 border-b border-gray-200">
              <p>Delivery Fees</p>
              <p> {getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <div className="cart-total-details flex justify-between py-2 font-bold">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} </p>
            </div>
          </div>
          <button onClick={() => navigate('/order')} className="bg-red-500 text-white py-2 px-4 rounded-md cursor-pointer w-full hover:bg-red-600 mt-4">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promocode w-1/3">
          <div>
            <p className="text-gray-600">If you have a promo code, enter it here</p>
            <div className="cart-promocode-input mt-4">
              <input
                type="text"
                placeholder="Promo Code"
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                className="btn mt-2 py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
