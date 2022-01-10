import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FeedCard from './FeedCard';
import FeedAlbum from './FeedAlbum';

function FeedContainer() {
  const [feedStyle, setFeedStyle] = useState(true);

  const ChangeFeedStyle = () => {
    setFeedStyle((current) => !current);
  };

  return (
    <div>
      <FeedHeader>
        <ButtonCard
          onClick={ChangeFeedStyle}
          type="button"
          disabled={feedStyle}
        >
          {feedStyle ? (
            <ImgList src="img/icon/icon-post-list-on.png" alt="" />
          ) : (
            <ImgList src="img/icon/icon-post-list-off.png" alt="" />
          )}
        </ButtonCard>
        <ButtonAlbum
          onClick={ChangeFeedStyle}
          type="button"
          disabled={!feedStyle}
        >
          {feedStyle ? (
            <ImgAlbum src="img/icon/icon-post-album-off.png" alt="" />
          ) : (
            <ImgAlbum src="img/icon/icon-post-album-on.png" alt="" />
          )}
        </ButtonAlbum>
      </FeedHeader>
      {feedStyle ? <FeedCard /> : <FeedAlbum />}
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
`;

const ButtonCard = styled.button`
  border: none;
  background-color: inherit;
`;

const ButtonAlbum = styled.button`
  border: none;
  background-color: inherit;
  margin-left: 8px;
`;
