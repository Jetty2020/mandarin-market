import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function FeedAlbum({ contentimage }) {
  const newArr = contentimage.split(',');
  return (
    <div>{contentimage !== '' ? <Img src={newArr[0]} alt="" /> : null}</div>
  );
}

export default FeedAlbum;

FeedAlbum.propTypes = {
  contentimage: PropTypes.string.isRequired,
};

const Img = styled.img`
  border: 0.5px solid #dbdbdb;
  width: 100%;
  max-width: 146px;
  height: 100%;
  max-height: 146px;
`;
