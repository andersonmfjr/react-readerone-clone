import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainContentLink from '../MainContentLink';

import { extractIds } from '../../utils/extract';
import api from '../../config/api';

import { Container, Title, LinksContainer, LinksContainerList } from './styles';

class MainContent extends Component {
  state = {
    fetching: false,
    news: [],
  };

  async componentDidMount() {
    await this.getDataFromApi();
  }

  async componentDidUpdate(oldProps) {
    const {
      active: { id },
    } = this.props;

    if (oldProps.active.id !== id) {
      await this.getDataFromApi();
    }
  }

  getDataFromApi = async () => {
    const { active, channels } = this.props;
    let endpoint;

    if (active.id !== 'all') {
      endpoint = `/news/${active.id}?limit=20`;
    } else {
      const ids = extractIds(channels);
      endpoint = `/all/${ids.join(',')}?limit=20`;
    }

    try {
      this.setState({ fetching: true });

      const fetch = await api.get(endpoint);
      const news = fetch.data;

      this.setState({ news, fetching: false });
    } catch (error) {
      console.log(error);
      this.setState({ fetching: false });
    }
  };

  render() {
    const { fetching, news } = this.state;
    const { active } = this.props;

    return (
      <Container>
        <Title>{active.name}</Title>
        {fetching ? (
          <div>Loading...</div>
        ) : (
          <>
            <LinksContainer>
              <LinksContainerList>
                {news.map(item => (
                  <MainContentLink
                    key={item.title}
                    title={item.title}
                    url={item.url}
                    author={item.author}
                    comments={item.comments}
                    score={item.score}
                    source={item.one_sources}
                  />
                ))}
              </LinksContainerList>
            </LinksContainer>
          </>
        )}
      </Container>
    );
  }
}

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
  channels: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default MainContent;
