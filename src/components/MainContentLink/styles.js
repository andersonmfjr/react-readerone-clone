import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.li`
  padding: 10px;
  height: auto;
  border-radius: 2px;
  position: relative;
  z-index: 1;

  &:hover {
    background: ${colors.light};
  }

  @media only screen and (max-width: 800px) {
    padding: 10px 25px 10px 10px;
  }
`;

export const Link = styled.a`
  position: relative;
  z-index: 1;
  display: block;
  text-decoration: none;
  color: ${colors.darker};

  &:visited {
    color: ${colors.dark};
  }
`;

export const LinkTitle = styled.span`
  font-size: 14px;
  width: 90%;
  display: block;
  margin: 0;
  font-weight: normal;
  line-height: 2em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const LinkDescription = styled.span`
  font-size: 12px;
  margin: 5px 0 0;
  color: ${colors.dark};
  width: 100%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LinkDescriptionItem = styled.span`
  margin-right: 5px;
`;
