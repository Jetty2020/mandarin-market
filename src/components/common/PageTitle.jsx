import React from 'react';
import propTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

function PageTitle({ title }) {
  return (
    <Helmet>
<<<<<<< HEAD
      <title>{title} | World Art Works</title>
=======
      <title>{title} | Mandarin Market</title>
>>>>>>> 7649b1832a5b25729f104f6296e1f069bbcaa5b5
    </Helmet>
  );
}

PageTitle.propTypes = {
  title: propTypes.string.isRequired,
};
export default PageTitle;
