import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FeedCard from './FeedCard';

function FeedContainer() {
  return (
    <div>
      <FeedHeader>
        <ImgList src="img/icon/icon-post-list-on.png" alt="" />
        <ImgAlbum src="img/icon/icon-post-album-off.png" alt="" />
      </FeedHeader>
      <FeedCard />
    </div>
  );
}

export default FeedContainer;

const FeedHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 0.5px solid #dbdbdb;
  background-color: white;
  padding: 9px 15px;
`;

const ImgList = styled.img`
  width: 26px;
  height: 26px;
`;

const ImgAlbum = styled.img`
  width: 26px;
  height: 26px;
  margin-left: 16px;
`;
