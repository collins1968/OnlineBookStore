import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '.././context/userContext/context'


const CartPage2 = () => {
    const { user } = useContext(Context);
    const [cartItems, setCartItems] = useState([]);

    const apiUrl = 'http://localhost:8081';
  
    useEffect(() => {
      // Fetch the cart items from the server
      const fetchCartItems = async (cartId) => {
        try {
          const response = await axios.get('http://localhost:8081/carts',
          { headers: { Authorization: `${user.token}` } }
          );
          setCartItems(response.data);
        } catch (error) {
          console.error('Error fetching cart items:', error);
        }
      };
  
      fetchCartItems();
    }, []);
  
const handleRemoveFromCart = async (cartId, itemId) => {
      try {
        await axios.delete(`http://localhost:8081/cart/${cartId}/items/${itemId}`);
        // Refresh the cart items after successful removal
        const response = await axios.get('/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error removing item from cart:', error);
      }
    };
  
    const handleQuantityChange = async (itemId, quantity) => {
      try {
        await axios.put(`http://localhost:8081/cart/${cartId}/items/${itemId}`, { quantity });
        // Refresh the cart items after successful quantity update
        const response = await axios.get('/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error updating cart item quantity:', error);
      }
    };
  
    return (
      <div className="cart-container">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.itemId}>
                <span>{item.bookName}</span>
                <div>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.itemId, e.target.value)
                    }
                  />
                  <button onClick={() => handleRemoveFromCart(item.itemId)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  

 export default CartPage2; 