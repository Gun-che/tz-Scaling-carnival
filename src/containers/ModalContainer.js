import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { togglerModal } from '../actions/ModalAction'

class ModalContainer extends React.Component {
  render() {
    return (
      <Modal></Modal>
    )
  }
}

const mapStateToProps = store => {
  return {
    showModal: store.modal.showModal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    togglerModal: bool => dispatch(togglerModal(bool)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
