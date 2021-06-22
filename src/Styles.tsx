import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import {device} from './StyleConstants';

export const Wrapper = styled.div`
  margin: 1rem;

  @media ${device.laptop} { 
    margin: 1.5rem;
  }
  @media ${device.desktop} {
    margin: 2rem;
  }

  h1{
    text-align: center;
    margin-top: 3rem;
  }

  section{
    display: flex; flex-direction: row; flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .product{
    width: 100%;
    margin: 1rem;
    @media ${device.tablet} { 
      width: 45%;
    }
    @media ${device.laptop} {
      margin: 2rem;
      width: 25%;
    }
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 2rem;
  top: 1.5rem;
  @media ${device.laptop} {
    right: 5rem;
  }
`;