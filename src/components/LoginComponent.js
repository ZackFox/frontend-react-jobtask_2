import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signIn } from "../actions/authActions";

class LoginComponent extends Component {
  submitHandler = event => {
    event.preventDefault();
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    this.props.signIn({ email, password });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            ref={el => (this.emailInput = el)}
            placeholder="Email"
          />
          <input
            type="password"
            ref={el => (this.passwordInput = el)}
            placeholder="Пароль"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

LoginComponent.proptypes = {
  signIn: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { signIn })(LoginComponent);
