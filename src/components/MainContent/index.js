import React from 'react';
import PropTypes from 'prop-types';
import MainContentLink from '../MainContentLink';

import { Container, Title, LinksContainer, LinksContainerList } from './styles';

const MainContent = ({ active }) => (
  <Container>
    <Title>{active.name}</Title>
    <LinksContainer>
      <LinksContainerList>
        <MainContentLink />
      </LinksContainerList>
    </LinksContainer>
  </Container>
);

MainContent.defaultProps = {
  active: {
    name: 'All In One',
    id: 'all',
  },
};

MainContent.propTypes = {
  active: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default MainContent;
