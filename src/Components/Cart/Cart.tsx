import CartItem from "../CartItem/CartItem";
import {Wrapper} from './Cart.Styles';
import { Products } from "../../ShoppingCartHook";

type Props = {
  cartItems: Products[];
  addToCart: (clickedItem: Products) => void;
  removeFromCart:(id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) =>{
  const calculateTotal = (cartItems: Products[]) =>
    cartItems.reduce((ack:number, cartItem) => ack + cartItem.amount * cartItem.price, 0)
  return(
    <Wrapper>
      <h2> Your Shopping Cart </h2>
      {cartItems.length !== 0? 
      cartItems.map(cartItem => 
        <CartItem key={cartItem.id} cartItem={cartItem} addToCart={addToCart} removeFromCart={removeFromCart}>
        </CartItem>)
      : <p> No items in cart </p>}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  )
}
export default Cart;