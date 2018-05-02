import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../actions/profileActions";
import NotFound from "./NotFound";

class ProfileComponent extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProfile(id);
  }

  render() {
    const { profile, isFetching } = this.props;
    if (isFetching) {
      return <div>Загрузка...</div>;
    }
    if (!profile) {
      return <NotFound />;
    }

    return (
      <div>
        <p>
          <strong>Город: </strong>
          {profile.city}
        </p>
        <strong> Знание языков: </strong>
        <ul>{profile.languages.map(item => <li key={item}>{item}</li>)}</ul>
        <ul>
          {profile.social.map(item => (
            <li key={item.label}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ProfileComponent.proptypes = {
  profile: PropTypes.shape().isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profileReducer.profile,
  isFetching: state.profileReducer.isFetching,
});

export default connect(mapStateToProps, { getProfile })(ProfileComponent);
