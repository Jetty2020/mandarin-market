import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function FeedAlbum() {
  return (
    <AlbumContainer>
      <Img src="img/post-img-example.png" alt="" />
      <Img src="img/post-img-example.png" alt="" />
      <Img src="img/post-img-example.png" alt="" />
      <Img src="img/post-img-example.png" alt="" />
      <Img src="img/post-img-example.png" alt="" />
      <Img src="img/post-img-example.png" alt="" />
      <Img src="img/post-img-example.png" alt="" />
      <Img src="img/post-img-example.png" alt="" />
    </AlbumContainer>
  );
}

export default FeedAlbum;

const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(114px, 146px));
  gap: 8px;
  padding: 16px;
  background-color: white;
  border: 1px solid salmon;
  margin-bottom: 59px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
