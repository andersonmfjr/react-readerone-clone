import React from 'react';

import {
  Container,
  Link,
  LinkTitle,
  LinkDescription,
  LinkDescriptionItem,
} from './styles';

const MainContentLink = () => (
  <Container>
    <Link href="https://google.com" target="_self">
      <LinkTitle>
        Over 20 feared dead after explosion at Kyoto Animation studio, dozens
        injured
      </LinkTitle>
      <LinkDescription>
        <LinkDescriptionItem>Hacker News</LinkDescriptionItem>
        <LinkDescriptionItem>125 pts</LinkDescriptionItem>
        <LinkDescriptionItem>by xbmcuser</LinkDescriptionItem>
        <LinkDescriptionItem>24 comments</LinkDescriptionItem>
      </LinkDescription>
    </Link>
  </Container>
);

export default MainContentLink;
