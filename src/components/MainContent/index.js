import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainContentLink from '../MainContentLink';
import Sidebar from '../Sidebar';

import { extractIds } from '../../utils/extract';
import getWidth from '../../utils/getWidth';
import api from '../../config/api';

import {
  Container,
  Title,
  LinksContainer,
  LinksContainerList,
  Menu,
  Message,
} from './styles';

class MainContent extends Component {
  state = {
    fetching: false,
    news: [],
    viewport: getWidth(),
    menuVisible: false,
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

  switchMenu = () => {
    const { menuVisible } = this.state;
    this.setState({ menuVisible: !menuVisible });
  };

  render() {
    const { fetching, news, viewport, menuVisible } = this.state;
    const { active, channels, changeChannel } = this.props;

    return (
      <Container>
        <Title>
          {active.name}
          <Menu onClick={this.switchMenu} />
        </Title>

        {viewport < 800 && menuVisible ? (
          <Sidebar
            active={active}
            channels={channels}
            changeChannel={changeChannel}
          />
        ) : (
          ''
        )}

        {fetching ? (
          <Message>Loading...</Message>
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
  changeChannel: PropTypes.func.isRequired,
  channels: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default MainContent;
