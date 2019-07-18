import styled from 'styled-components';

export const Container = styled.li`
  padding: 10px;
  height: auto;
  border-radius: 2px;
  position: relative;
  z-index: 1;

  &:hover {
    background: #eee;
  }
`;

export const Link = styled.a`
  position: relative;
  z-index: 1;
  display: block;
  text-decoration: none;
  color: #303030;

  &:visited {
    color: #999;
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
`;

export const LinkDescription = styled.span`
  font-size: 12px;
  margin: 5px 0 0;
  color: #999;
  width: 100%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LinkDescriptionItem = styled.span`
  margin-right: 5px;
`;
