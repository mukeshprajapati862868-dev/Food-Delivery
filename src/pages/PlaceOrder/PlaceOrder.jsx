import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext'; // Assuming you have this context for cart info
import './PlaceOrder.css'; // Custom CSS for styling

const PlaceOrder = () => {
  

  const {getTotalCartAmount} = useContext(StoreContext);
 
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        {/* Multi-input fields for first name, last name, city, and state */}
        <div className="multi-fields">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email address" required />
        <input type="text" placeholder="Street" required />

        {/* Multi-input fields for city, state, zip code, and country */}
        <div className="multi-fields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="tel" placeholder="Phone" required />
      </div>

      <div className="place-order-right">
        <div className="cart-bottom">
          <div className="cart-total">
            <h2 className="text-lg font-semibold">Cart Totals</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>   {getTotalCartAmount()===0?0:2}</p>
            </div>
            <div className="cart-total-details font-bold">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2} </p>
            </div>

            {/* Proceed to Checkout Button */}
            <button
              type="button"className="btn-proceed">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
