import React from "react";
import PropTypes from "prop-types";

const NewsItem = ({ data }) => {
  return (
    <div className="container">
      <a
        href={`https://mysterious-reef-29460.herokuapp.com/api/v1/news/${
          data.id
        }`}
      >
        {data.title}
      </a>
      <p>{data.text}</p>
    </div>
  );
};

export default NewsItem;
