import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import SidebarList from '../SidebarList';

import logo from '../../assets/favicon.png';
import STATIC_CHANNELS from '../../config/static';

import {
  Container,
  Logo,
  ModalHeader,
  ModalHeaderTitle,
  ModalSubtitle,
  LabelForm,
  InputForm,
  ModalBody,
} from './styles';

export default class Sidebar extends Component {
  state = { modalVisible: false, localChannels: STATIC_CHANNELS };

  toggleModal = () => {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: !modalVisible });
  };

  existsInLocalStorage = id => {
    const { channels } = this.props;
    return !!channels.find(el => el.id === id);
  };

  existsInStaticChannels = id => {
    const { localChannels } = this.state;
    return !!localChannels.find(el => el.id === id);
  };

  createChannel = value => {
    const id = value.split('-')[0];
    const name = value.split('-')[1];
    const order = value.split('-')[2];
    const channel = { id, name, order };
    return channel;
  };

  handleInputChange = event => {
    const { updateChannels } = this.props;
    const { localChannels } = this.state;
    const { target } = event;
    const value = target.checked;
    const { name } = target;
    const { channels } = this.props;

    if (!value) {
      const removeIndex = channels
        .map(item => item.id)
        .indexOf(name.split('-')[0]);

      channels.splice(removeIndex, 1);
    } else {
      const channel = this.createChannel(name);
      channels.push(channel);
    }

    const orderedChannels = channels.sort((a, b) => a.order - b.order);
    localStorage.setItem('channels', JSON.stringify(orderedChannels));

    const channel = this.createChannel(name);

    if (!this.existsInStaticChannels(channel.id)) {
      this.setState({
        localChannels: [...localChannels, channel].sort(
          (a, b) => a.order - b.order
        ),
      });
    }

    updateChannels();
  };

  render() {
    const { modalVisible, localChannels } = this.state;
    const { channels, changeChannel, active } = this.props;

    return (
      <>
        <Container>
          <Logo>
            <img src={logo} alt="Reader One's Logo" />
          </Logo>
          <SidebarList
            channels={channels}
            changeChannel={changeChannel}
            active={active}
            toggleModal={this.toggleModal}
          />
        </Container>
        <Modal
          style={{ padding: 0 }}
          open={modalVisible}
          onClose={() => this.toggleModal()}
          center
        >
          <ModalHeader>
            <ModalHeaderTitle>Settings</ModalHeaderTitle>
          </ModalHeader>
          <ModalBody>
            <ModalSubtitle>Enabled news sources</ModalSubtitle>
            {localChannels.map(channel => (
              <LabelForm key={`label-${channel.id}`} htmlFor={channel.id}>
                <InputForm
                  name={`${channel.id}-${channel.name}-${channel.order}`}
                  type="checkbox"
                  checked={this.existsInLocalStorage(channel.id)}
                  onChange={this.handleInputChange}
                />
                <span>{channel.name}</span>
              </LabelForm>
            ))}
          </ModalBody>
        </Modal>
      </>
    );
  }
}

Sidebar.defaultProps = {
  active: {
    name: 'All In One',
    id: 'all',
  },
};

Sidebar.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  changeChannel: PropTypes.func.isRequired,
  updateChannels: PropTypes.func.isRequired,
  active: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
};
