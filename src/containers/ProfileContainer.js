import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ProfileComponent from "../components/ProfileComponent";

const ProfileContainer = ({ isLoggedIn, user }) => {
  if (isLoggedIn && user) {
    return <ProfileComponent user={user} />;
  }
  return <Redirect to="/login" />;
};

ProfileContainer.proptypes = {
  user: PropTypes.shape().isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  user: state.authReducer.user,
  isLoggedIn: state.authReducer.isLoggedIn,
});

export default connect(mapStateToProps, null)(ProfileContainer);
