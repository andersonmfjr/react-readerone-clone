import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.main`
  float: left;
  width: 75%;
  margin-left: 25%;
  height: 100%;
  position: relative;

  @media only screen and (max-width: 800px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin: 30px 30px 10px;
  font-size: 24px;
  line-height: 40px;

  @media only screen and (max-width: 800px) {
    width: 100%;
    background-color: #fafafa;
    margin: 0;
    font-size: 20px;
    line-height: 46px;
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid ${colors.light};
    height: 46px;
    position: relative;
  }
`;

export const LinksContainer = styled.div`
  border-radius: 5px;
  position: relative;
  display: inline-block;
  text-align: left;
  padding: 10px 20px;
  vertical-align: top;
  width: 100%;

  @media only screen and (max-width: 800px) {
    padding: 10px;
  }
`;

export const LinksContainerList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Menu = styled.div`
  display: none;

  @media only screen and (max-width: 800px) {
    position: absolute;
    left: 10px;
    top: 17px;
    display: inline-block;
    height: 14px;
    width: 20px;
    font-size: 20px;

    &::before {
      content: '';
      position: absolute;
      width: 1em;
      height: 0.125em;
      border-top: 0.375em double ${colors.dark};
      border-bottom: 0.125em solid ${colors.dark};
    }
  }
`;

export const Message = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #999;
`;
