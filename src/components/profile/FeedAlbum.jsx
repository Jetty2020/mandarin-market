import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function FeedAlbum({ contentimage, postid }) {
  const newArr = contentimage.split(',');
  return (
    <Link to={`/postdetail/${postid}`}>
      {contentimage !== '' ? <Img src={newArr[0]} alt="" /> : null}
    </Link>
  );
}

export default FeedAlbum;

FeedAlbum.propTypes = {
  contentimage: PropTypes.string.isRequired,
  postid: PropTypes.string.isRequired,
};

const Img = styled.img`
  width: 100%;
  max-width: 146px;
  height: 100%;
  max-height: 146px;
  border: 0.5px solid #dbdbdb;
  object-fit: cover;
`;
