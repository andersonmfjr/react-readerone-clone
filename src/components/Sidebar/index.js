import React from 'react';
import PropTypes from 'prop-types';
import SidebarList from '../SidebarList';

import icon from '../../assets/favicon.png';
import { Container, Logo } from './styles';

const Sidebar = ({ channels, changeChannel, active }) => (
  <Container>
    <Logo>
      <img src={icon} alt="Reader One's Logo" />
    </Logo>
    <SidebarList
      channels={channels}
      changeChannel={changeChannel}
      active={active}
    />
  </Container>
);

Sidebar.defaultProps = {
  active: {
    name: 'All In One',
    id: 'all',
  },
};

Sidebar.propTypes = {
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

export default Sidebar;
