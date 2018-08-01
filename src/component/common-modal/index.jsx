import React from 'react';
import { Modal } from 'components';

export default class CommonModal extends React.Component {
  render () {
    const { visible, handleHide, title, content } = this.props;
    return (
      <Modal visible={visible} onOk={handleHide} onCancel={handleHide} title={title}>
        { content }
      </Modal>
    )
  }
}
