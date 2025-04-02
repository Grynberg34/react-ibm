import Header from "../components/Header";
import "../styles/cart.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, deleteFromCart } from "../store/actions/cartActions"

export default function Cart() {

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const groupedCart = cart.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 1 };
    } else {
      acc[item.id].quantity++;
    }
    return acc;
  }, {});

  const cartItems = Object.values(groupedCart);

  return (
    <div>

      <Header />

      <div className="cart">

        <h1 className="cart__amount">Total amount: {totalPrice}$</h1>

        {cartItems.length === 0 ? (
          null
        ) : (
          <div className="cart__list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart__list__item">
                <img src={item.thumbnail} alt={item.name} className="cart__list__item__image" />
                <div className="cart__list__item__info">
                  <h2 className="cart__list__item__name">{item.name}</h2>
                  <p className="cart__list__item__price">${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="cart__list__item__controls">
                    <button className="cart__list__item__controls__control" onClick={() => dispatch(removeFromCart(item.id))}>-</button>
                    <span className="cart__list__item__controls__quantity">{item.quantity}</span>
                    <button className="cart__list__item__controls__control" onClick={() => dispatch(addToCart(item))}>+</button>
                  </div>
                  <button className="cart__list__item__delete" onClick={() => dispatch(deleteFromCart(item.id))}> Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <Link className="cart__button" to="/landing">Continue Shooping</Link>

        <button className="cart__button">Checkout</button>

      </div>


    </div>
  );
}
