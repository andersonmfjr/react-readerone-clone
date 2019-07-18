import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.ul`
  margin-left: 20px;
  text-align: left;

  @media only screen and (max-width: 800px) {
    margin-left: 0;
  }
`;

export const Item = styled.li`
  width: 100%;
  line-height: 30px;
  font-size: 14px;
  list-style: none;
  cursor: pointer;
  position: relative;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};

  @media only screen and (max-width: 800px) {
    width: ${props => (props.special ? '100%' : '25%')};
    margin: 0;
    line-height: normal;
    padding: 10px;
    text-align: center;
    display: inline-block;
    color: ${colors.black};
  }
`;

export const Divider = styled.li`
  margin: 20px 0;
  height: 1px;
  background: linear-gradient(to right, #dcdcdc, rgba(220, 220, 220, 0));
  list-style: none;

  @media only screen and (max-width: 800px) {
    margin: 5px 0 10px;
    background: ${colors.light};
  }
`;
