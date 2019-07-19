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

export const ModalHeader = styled.div`
  padding: 18px 20px;
  width: 100%;
  position: relative;
  z-index: 10;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 25px;
`;

export const ModalBody = styled.div`
  padding: 0 24px;
  margin-bottom: 15px;
`;

export const ModalHeaderTitle = styled.h3`
  font-weight: bold;
  text-transform: none;
  letter-spacing: normal;
`;

export const ModalSubtitle = styled.h3`
  color: ${colors.black};
  font-size: 14px;
  margin-bottom: 0.8em;
  font-weight: normal;
`;

export const LabelForm = styled.label`
  display: inline-block;
  margin-right: 1em;
  line-height: 1.8em;
  font-size: 13px;
  width: 45%;
`;

export const InputForm = styled.input`
  vertical-align: middle;
  margin-right: 5px;
  display: inline;
`;
