import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllNews } from "../actions/newsActions";

import NewsItem from "./NewsItem";

class NewsComponent extends Component {
  componentDidMount() {
    this.props.getAllNews();
  }

  render() {
    const { news, isFetching } = this.props;
    if (isFetching) {
      return <div>Загрузка...</div>;
    }
    return (
      <div>{news.map(item => <NewsItem key={item.id} data={item} />)}</div>
    );
  }
}

NewsComponent.proptypes = {
  news: PropTypes.arrayOf().isRequired,
  isFetching: PropTypes.bool.isRequired,
  getAllNews: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  news: state.newsReducer.news,
  isFetching: state.newsReducer.isFetching,
});

export default connect(mapStateToProps, { getAllNews })(NewsComponent);
