import React from 'react';
import MainContentLink from '../MainContentLink';

import { Container, Title, LinksContainer, LinksContainerList } from './styles';

const MainContent = () => (
  <Container>
    <Title>All In One</Title>
    <LinksContainer>
      <LinksContainerList>
        <MainContentLink />
      </LinksContainerList>
    </LinksContainer>
  </Container>
);

export default MainContent;
