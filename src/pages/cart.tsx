import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "i4g5ihrwkevis",
    name: "Gamign PC",
    price: 1299,
    quantity: 10,
    stock: 28,
    photo:
      "https://m.media-amazon.com/images/I/81CFOwoLVlL._AC_SX466_.jpg?fbclid=IwAR2sbMsdh8rBAKomsURo-cFNsw4_Y9g8wU3bI0u4la25KdpvNc4cLYr4L1Y",
  },
];

const subtotal = 200;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 20;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<String>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() < 0.5) {
        setIsValidCouponCode(true);
      } else {
        setIsValidCouponCode(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timeOutID);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item, i) => <CartItem key={i} cartItem={item} />)
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>

      <aside>
        <p>Subtotal: ${subtotal}</p>
        <p>Shipping Charges: ${shippingCharges}</p>
        <p>Tax: ${tax}</p>
        <p>
          Discount: <em className="red"> - ${discount}</em>
        </p>
        <p>
          <b>Total: {total}</b>
        </p>
        <input
          type="text"
          value={couponCode}
          placeholder="Coupon Code"
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ${discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Chech Out</Link>}
      </aside>
    </div>
  );
};

export default Cart;
