import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signOut } from "../actions/authActions";
import { Link } from "react-router-dom";

class SignButton extends Component {
  clickHandler = event => {
    event.preventDefault();
    this.props.signOut();
  };

  render() {
    const { isLoggedIn, user } = this.props;
    if (isLoggedIn && user) {
      return (
        <a href="/" onClick={this.clickHandler}>
          Выход
        </a>
      );
    }
    return <Link to="/login">Войти</Link>;
  }
}

SignButton.proptypes = {
  user: PropTypes.shape().isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.authReducer.user,
  isLoggedIn: state.authReducer.isLoggedIn,
});

export default connect(mapStateToProps, { signOut })(SignButton);
