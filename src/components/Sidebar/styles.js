import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.aside`
  width: 25%;
  min-width: 200px;
  float: left;
  color: ${colors.regular};
  background-color: ${colors.light};
  height: 100%;
  position: fixed;
  padding-left: 5%;

  @media only screen and (max-width: 800px) {
    display: block;
    width: 100%;
    position: relative;
    padding: 10px;
    height: auto;
    background-color: #fafafa;
  }
`;

export const Logo = styled.div`
  height: 100px;
  margin-left: 18px;
  padding-top: 30px;
  opacity: 0.7;

  & img {
    border: 0;
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
