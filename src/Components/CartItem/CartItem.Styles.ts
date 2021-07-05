
import styled from 'styled-components';
import { device } from '../../StyleConstants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightblue;
  padding-bottom: 1.25rem;

  .information{
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    @media ${device.laptop} {
      flex-direction: row;
    }
  }

  p{
    margin: 0.5rem 0;
    @media ${device.laptop} {
      margin: 1rem 1rem;
    }
  }

  .buttons{
    display: flex; justify-content: space-between;
    width: 100%;
    font-weight: bold;
    @media ${device.laptop} {
      width: 50%;
    }
  }

  img{
    max-width: 4rem;
    max-height: 5rem;
    object-fit: cover;
  }
`;