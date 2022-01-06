import React from 'react';
import propTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title} | World Art Works</title>
    </Helmet>
  );
}

PageTitle.propTypes = {
  title: propTypes.string.isRequired,
};
export default PageTitle;
