import React from 'react';

import { Container, Item, Divider } from './styles';

const SiderbarList = ({ channels }) => (
  <Container>
    <Item>All in One</Item>
    {channels.map((channel, index) => (
      <>
        <Item key={channel.id}>{channel.name}</Item>
        {index === 0 ? <Divider /> : ''}
      </>
    ))}
    <Divider />
    <Item>Settings</Item>
  </Container>
);

export default SiderbarList;
