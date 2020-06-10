import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { togglerModal } from '../actions/ModalAction'

class ModalContainer extends React.Component {

  handlerCloseModal = e => {
    this.props.togglerModal(false, '')
  }

  handleAfterOpenFunc = () => {
    let modal = document.querySelector('.modal')
    let img = document.querySelector('.modal img')
    img.addEventListener('load', e => {
      modal.style.left = document.documentElement.clientWidth / 2 - modal.offsetWidth / 2 + 'px'
    })

  }

  render() {
    return (
      <Modal
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={this.handleCloseModal}
        closeTimeoutMS={200}
        overlayClassName="overlay"
        className="modal"
        onAfterOpen={this.handleAfterOpenFunc}
        isOpen={this.props.showModal}
        contentLabel="modal"
        appElement={document.body}>
        <img src={this.props.link} alt="" />
        <button
          onClick={this.handlerCloseModal}
        >X</button>

      </Modal>
    )
  }
}

const mapStateToProps = store => {
  return {
    showModal: store.modal.showModal,
    link: store.modal.fullSizeImg,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    togglerModal: (bool, link) => dispatch(togglerModal(bool, link)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
