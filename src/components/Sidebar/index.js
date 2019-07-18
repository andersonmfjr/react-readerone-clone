import React from 'react';
import SidebarList from '../SiderbarList';

import icon from '../../../public/favicon.png';
import { Container, Logo } from './styles';

const Sidebar = () => (
  <Container>
    <Logo>
      <img src={icon} alt="Reader One's Logo" />
    </Logo>
    <SidebarList />
  </Container>
);

export default Sidebar;
