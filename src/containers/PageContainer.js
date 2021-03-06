import React from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../actions/PageActions';
import { togglerModal } from '../actions/ModalAction'
import Page from '../components/Page';


class PageContainer extends React.Component {
  render() {
    return (
      <Page
        error={this.props.page.error}
        isFetching={this.props.page.isFetching}
        photos={this.props.page.photos}
        year={this.props.page.year}
        getPhotos={this.props.getPhotos}
        togglerModal={this.props.togglerModal}></Page>
    )
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: year => dispatch(getPhotos(year)),
    togglerModal: (bool, link) => dispatch(togglerModal(bool, link)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)