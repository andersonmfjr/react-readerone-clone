import React from 'react';
import PropTypes from 'prop-types';

import { Container, Item, Divider } from './styles';

const SidebarList = ({ channels, changeChannel, active }) => {
  console.log(active);
  return (
    <Container>
      <Item
        onClick={() => changeChannel({ name: 'All In One', id: 'all' })}
        active={active.id === 'all'}
      >
        All in One
      </Item>

      {channels.length > 0 && <Divider />}

      {channels.map(channel => (
        <Item
          active={channel.id === active.id}
          onClick={() => changeChannel(channel)}
          key={channel.id}
        >
          {channel.name}
        </Item>
      ))}

      <Divider />

      <Item>Settings</Item>
    </Container>
  );
};

SidebarList.defaultProps = {
  active: {
    name: 'All In One',
    id: 'all',
  },
};

SidebarList.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  changeChannel: PropTypes.func.isRequired,
  active: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default SidebarList;
