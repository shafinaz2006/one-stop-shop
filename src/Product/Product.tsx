import Button from '@material-ui/core/Button';
import {Products} from '../ShoppingCartHook';
import {Wrapper} from './Product.Styles';

type Props = {
  product: Products;
  handleAddToCart: (clickedProduct: Products) => void;
}
const Product: React.FC<Props> = ({product, handleAddToCart}) =>(
  <Wrapper>
    <img src={product.image} alt={product.title}/>
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h3 className='product__price'>${product.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(product)}>Add to cart </Button>
  </Wrapper>
) 
export default Product;