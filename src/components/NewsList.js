import React from "react";
import PropTypes from "prop-types";

import NewsItem from "./NewsItem";
import withLoading from "../hoc/withLoading";

const NewsList = ({ data }) => {
  return (
    <div>
      {data.map(item => <NewsItem key={item.id} data={item} />)}
      <p>Всего новостей: {data.length}</p>
    </div>
  );
};

NewsList.propTypes = {
  data: PropTypes.arrayOf().isRequired,
};

export default withLoading(NewsList);
