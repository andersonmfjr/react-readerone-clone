import React, { Component } from 'react';
import GlobalStyle from './styles';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import getWidth from './utils/getWidth';

import STATIC_CHANNELS from './config/static';

// Main page
export default class App extends Component {
  state = {
    active: { name: 'All In One', id: 'all' },
    channels: STATIC_CHANNELS,
    viewport: getWidth(),
  };

  componentDidMount() {
    const channels = localStorage.getItem('channels');

    if (channels && channels.length > 0) {
      this.setState({ channels: JSON.parse(channels) });
    } else {
      localStorage.setItem('channels', JSON.stringify(STATIC_CHANNELS));
    }
  }

  changeActiveChannel = channel => {
    this.setState({ active: channel });
  };

  render() {
    const { active, channels, viewport } = this.state;

    return (
      <div>
        {viewport >= 800 ? (
          <Sidebar
            active={active}
            channels={channels}
            changeChannel={this.changeActiveChannel}
          />
        ) : (
          ''
        )}
        <MainContent
          active={active}
          channels={channels}
          changeChannel={this.changeActiveChannel}
        />
        <GlobalStyle />
      </div>
    );
  }
}
