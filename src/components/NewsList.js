import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllNews } from "../actions/newsActions";

import NewsItem from "./NewsItem";
import withLoading from "../hoc/withLoading";

const NewsList = ({ data }) => {
  return (
    data && (
      <div>
        {data.map(item => <NewsItem key={item.id} data={item} />)}
        <p>Всего новостей: {data.length}</p>
      </div>
    )
  );
};

export default withLoading(NewsList);
