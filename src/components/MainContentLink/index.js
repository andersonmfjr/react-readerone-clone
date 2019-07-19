import React from 'react';
import PropTypes from 'prop-types';

import STATIC_CHANNELS from '../../config/static';
import { extractNameById } from '../../utils/extract';

import {
  Container,
  Link,
  LinkTitle,
  LinkDescription,
  LinkDescriptionItem,
} from './styles';

const MainContentLink = ({
  title,
  author,
  comments,
  score,
  url,
  source,
  category,
  dept,
}) => (
  <Container>
    <Link href={url} target="_self">
      {title ? <LinkTitle>{title}</LinkTitle> : ''}

      <LinkDescription>
        {category ? <LinkDescriptionItem>{category}</LinkDescriptionItem> : ''}

        {dept ? <LinkDescriptionItem>{dept}</LinkDescriptionItem> : ''}

        {source ? (
          <LinkDescriptionItem>
            {extractNameById(source[0], STATIC_CHANNELS)}
          </LinkDescriptionItem>
        ) : (
          ''
        )}

        {score >= 0 ? (
          <LinkDescriptionItem>
            {score} {score > 1 ? 'pts' : 'pt'}
          </LinkDescriptionItem>
        ) : (
          ''
        )}

        {author ? <LinkDescriptionItem>by {author}</LinkDescriptionItem> : ''}

        {comments >= 0 ? (
          <LinkDescriptionItem>
            {comments} {comments > 1 ? 'comments' : 'comment'}
          </LinkDescriptionItem>
        ) : (
          ''
        )}
      </LinkDescription>
    </Link>
  </Container>
);

MainContentLink.defaultProps = {
  title: '',
  comments: -1,
  score: -1,
  author: '',
  source: '',
  dept: '',
  category: '',
};

MainContentLink.propTypes = {
  title: PropTypes.string,
  comments: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  author: PropTypes.string,
  url: PropTypes.string.isRequired,
  source: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  category: PropTypes.string,
  dept: PropTypes.string,
};

export default MainContentLink;
