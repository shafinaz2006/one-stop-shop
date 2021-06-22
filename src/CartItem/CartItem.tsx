import Button from '@material-ui/core/Button';
import { Products } from '../ShoppingCartHook';
import {Wrapper} from './CartItem.Styles';

type Props = {
  cartItem: Products;
  addToCart: (clickedItem: Products) => void;
  removeFromCart: (id: number) => void;
}
const CartItem: React.FC<Props> = ({cartItem, addToCart, removeFromCart}) => (
  <Wrapper>
    <h3>{cartItem.title}</h3>
    <img src={cartItem.image} alt={cartItem.title}  />
    <div className='information'>
      <p>Price: ${cartItem.price}</p>
      <p> Total: ${(cartItem.amount * cartItem.price).toFixed(2)}</p>
    </div>
    <div className='buttons'>
      <Button size='small' disableElevation variant='contained' onClick={() => removeFromCart(cartItem.id)}>
        -
      </Button>
      <p>{cartItem.amount}</p>
      <Button size='small' disableElevation variant='contained' onClick={() => addToCart(cartItem)}>
        +
      </Button>
    </div>
  </Wrapper>
)

export default CartItem;