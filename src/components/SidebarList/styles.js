import styled from 'styled-components';

export const Container = styled.ul`
  margin-left: 20px;
  text-align: left;
`;

export const Item = styled.li`
  width: 100%;
  line-height: 30px;
  font-size: 14px;
  list-style: none;
  cursor: pointer;
  position: relative;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
`;

export const Divider = styled.li`
  margin: 20px 0;
  height: 1px;
  background: linear-gradient(to right, #dcdcdc, rgba(220, 220, 220, 0));
  list-style: none;
`;
