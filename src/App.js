import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import GlobalStyle from './styles';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

import channels from './config/static';

// Main page
class App extends Component {
  state = {
    active: { name: 'All In One', id: 'all' },
  };

  changeActiveChannel = channel => {
    this.setState({ active: channel });
  };

  render() {
    const { active } = this.state;

    return (
      <div>
        <Sidebar
          active={active}
          channels={channels}
          changeChannel={this.changeActiveChannel}
        />
        <MainContent active={active} />
        <GlobalStyle />
      </div>
    );
  }
}

export default hot(App);
