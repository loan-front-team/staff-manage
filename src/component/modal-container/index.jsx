import React from 'react';

export default class ModalContainer extends React.Component {
  state = {
    visible: false
  };

  // 打开模态框
  show = () => {
    this.setState({ visible: true });
  };

  // 隐藏模态框
  hide = () => {
    this.setState({ visible: false });
  };

  render () {
    const { visible } = this.state;
    const { children } = this.props;
    return children({
      visible: visible,
      show: this.show,
      hide: this.hide
    })
  }
}
