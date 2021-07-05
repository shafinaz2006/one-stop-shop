
import './App.css';
import Drawer from '@material-ui/core/Drawer';
import { LinearProgress } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import {Wrapper, StyledButton} from './Styles';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';
import { ShoppingCartHook } from './ShoppingCartHook';

const App = () => {
  // Hooks:
  const {products, isLoading, error, isCartOpen, cartItems, cartDrawerOpen, 
         getTotalItems, handleAddToCart, handleRemoveFromCart} = ShoppingCartHook();
         
  if(isLoading) return <LinearProgress />
  if(error) return <p>{error}</p>

  return (
    <Wrapper>
      <Drawer anchor='right' open={isCartOpen} onClose={() => cartDrawerOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>
      </Drawer>
      <StyledButton onClick={() => cartDrawerOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon></AddShoppingCartIcon>
        </Badge>
      </StyledButton>
      <h1> One Stop Store</h1>
      <section className='products'>
        {products? 
        products.map(product => 
          <div key={product.id} className='product'>
            <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
          </div>)
        : ''}
      </section>
    </Wrapper>
  );
}

export default App;
