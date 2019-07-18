import React from 'react';

import { Container, Item, Divider } from './styles';

const list = [
  {
    id: 'all',
    name: 'All in One',
  },
  {
    id: 'all',
    name: 'Hacker News',
  },
  {
    id: 'all',
    name: 'Reddit',
  },
  {
    id: 'all',
    name: 'Product Hunt',
  },
  {
    id: 'all',
    name: 'Slashdot',
  },
  {
    id: 'all',
    name: 'Designer News',
  },
  {
    id: 'all',
    name: 'Github Trending',
  },
  {
    id: 'all',
    name: 'Medium',
  },
  {
    id: 'all',
    name: 'Lifehacker',
  },
];

const SiderbarList = () => (
  <Container>
    {list.map((item, index) => (
      <>
        <Item key={item.id}>{item.name}</Item>
        {index === 0 ? <Divider /> : ''}
      </>
    ))}
    <Divider />
    <Item>Settings</Item>
  </Container>
);

export default SiderbarList;
