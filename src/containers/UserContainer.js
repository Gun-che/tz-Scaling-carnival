import React from 'react';
import User from '../components/User'
import { handleLogin } from '../actions/UserActions';
import { connect } from 'react-redux'

export class UserContainer extends React.Component {
  render() {
    return (
      <User
        name={this.props.user.name}
        error={this.props.user.error}
        isFetching={this.props.user.isFetching}
        handleLogin={this.props.handleLogin}></User>
    )
  }
}



const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: () => dispatch(handleLogin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);