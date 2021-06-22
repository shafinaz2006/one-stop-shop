import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex; 
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  justify-content: space-between;

  button{
    background-color: lightblue;
    border-radius: 0 0 20px 20px;
  }
  
  img{
    max-height: 250px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
  }
  
  .product__price{
    text-align: center;
  }
  
  div{
    font-family: Arial, Helvitica;
    padding: 1rem;
    height: 100%;
  }
`;