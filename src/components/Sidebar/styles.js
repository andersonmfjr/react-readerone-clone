import styled from 'styled-components';

export const Container = styled.aside`
  width: 25%;
  min-width: 200px;
  float: left;
  color: #666;
  background-color: #eee;
  height: 100%;
  position: fixed;
  padding-left: 5%;
`;

export const Logo = styled.div`
  height: 100px;
  margin-left: 18px;
  padding-top: 30px;
  opacity: 0.7;

  & img {
    border: 0;
  }
`;
