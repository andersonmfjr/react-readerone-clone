import React, { Component } from 'react';
import GlobalStyle from './styles';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

import STATIC_CHANNELS from './config/static';

// Main page
export default class App extends Component {
  state = {
    active: { name: 'All In One', id: 'all' },
    channels: STATIC_CHANNELS,
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
    const { active, channels } = this.state;

    return (
      <div>
        <Sidebar
          active={active}
          channels={channels}
          changeChannel={this.changeActiveChannel}
        />
        <MainContent active={active} channels={channels} />
        <GlobalStyle />
      </div>
    );
  }
}
