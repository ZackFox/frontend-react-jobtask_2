import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../actions/authActions";

class Login extends Component {
  state = {
    redirectTo: false,
  };

  submitHandler = event => {
    event.preventDefault();
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    this.props.signIn({ email, password }, () => {
      this.setState({ redirectTo: true });
    });
    this.passwordInput.value = "";
  };

  render() {
    const { isFetching, message } = this.props;

    if (this.state.redirectTo) {
      return <Redirect to="/profile" />;
    }

    return (
      <div className="login">
        <h3>Авторизация</h3>
        <span>{isFetching && "...обработка"}</span>
        <form onSubmit={this.submitHandler}>
          <p className="message">{message}</p>
          <input
            type="text"
            ref={el => (this.emailInput = el)}
            placeholder="Email*"
          />
          <input
            type="password"
            ref={el => (this.passwordInput = el)}
            placeholder="Пароль*"
          />
          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}

Login.proptypes = {
  signIn: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  message: state.authReducer.message,
  isFetching: state.authReducer.isFetching,
});

export default connect(mapStateToProps, { signIn })(Login);
