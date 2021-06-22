
import axios from 'axios'
import { useState, useEffect } from 'react';

export type Products = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const defaultProducts: Products[] = [];

export const ShoppingCartHook = () =>{

  const [products, setProducts]: [Products[], (products: Products[]) => void] = useState(defaultProducts);
  const [isLoading, setIsLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as Products[]);

  const getProducts = () =>{
    axios
      .get('https://fakestoreapi.com/products')
      .then(response =>{
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch(error => setError(error));
  }
  useEffect(() =>{
    getProducts();
  }, [])

  // changing the drawer status: open/close:

  const cartDrawerOpen = (status: boolean) =>{
    console.log('inside drawer');
    status? setIsCartOpen(true): setIsCartOpen(false);
  }

  // getting total items in cart:

  const getTotalItems = (cartItems: Products[]) =>{ 
    return (cartItems.reduce((ack: number, cartItems) => ack + cartItems.amount, 0));
  } 
  
  // adding products in cart:

  const handleAddToCart = (clickedItem: Products) =>{
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if(isItemInCart){
        return prev.map(item => (
          item.id === clickedItem.id? 
          {...item, amount: item.amount + 1}: item
        ))
      }
      return [...prev, {...clickedItem, amount: 1}];
    })
  }
  // removing products from cart: 
  
  const handleRemoveFromCart = (id: number) =>{
    setCartItems(prev =>(
      prev.reduce((ack, item) => {
        if(item.id === id) {
          if(item.amount === 1) return ack;
          else return [...ack, {...item, amount: item.amount - 1}];
        } else {
          return [...ack, item];
        }
      }, [] as Products[])
    ))
  }
  return {products, isLoading, error, isCartOpen, cartItems, cartDrawerOpen, getTotalItems, handleAddToCart, handleRemoveFromCart}
}

