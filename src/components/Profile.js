import React from "react";
import PropTypes from "prop-types";

import withLoading from "../hoc/withLoading";

const Profile = ({ data }) => {
  return (
    data && (
      <div className="profile">
        <h3>Профиль</h3>

        <p>
          <strong>Город: </strong>
          {data.city}
        </p>

        <strong> Знание языков: </strong>
        <ul className="lang">
          {data.languages.map(item => <li key={item}> +{item} </li>)}
        </ul>

        <br />
        <strong>Ссылки: </strong>

        <ul className="social">
          {data.social.map(item => (
            <li key={item.label}>
              <a href={item.link}>
                <i
                  className={`fa fa-${
                    item.label === "web" ? "globe" : item.label
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

Profile.propTypes = {
  data: PropTypes.shape().isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default withLoading(Profile);
