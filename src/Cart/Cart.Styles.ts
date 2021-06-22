import styled from 'styled-components';
import { device } from '../StyleConstants';
export const Wrapper = styled.aside`
  font-family: Arial, Helvetica;
  width: 200px;
  padding: 20px;
  @media ${device.laptop} {
    width: 400px;
  }
  h2{
    text-align: center;
  }
`;