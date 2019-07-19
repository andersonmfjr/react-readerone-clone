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
    this.updateChannels();
  }

  changeActiveChannel = channel => {
    this.setState({ active: channel });
  };

  updateChannels = () => {
    const channels = localStorage.getItem('channels');
    if (channels && channels.length > 0) {
      const orderedChannels = JSON.parse(channels).sort(
        (a, b) => a.order - b.order
      );
      this.setState({ channels: orderedChannels });
    } else {
      localStorage.setItem('channels', JSON.stringify(STATIC_CHANNELS));
    }
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
            updateChannels={this.updateChannels}
          />
        ) : (
          ''
        )}
        <MainContent
          active={active}
          channels={channels}
          changeChannel={this.changeActiveChannel}
          updateChannels={this.updateChannels}
        />
        <GlobalStyle />
      </div>
    );
  }
}
