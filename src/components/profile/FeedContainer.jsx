import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FeedCard from './FeedCard';
import FeedAlbum from './FeedAlbum';
import { SERVER_BASE_URL } from '../../constants';

function FeedContainer({ feedHeaderMarginTop, feedState, whichUser }) {
  const [feedStyle, setFeedStyle] = useState(true);
  const [noImageFeedList, setNoImageFeedList] = useState([]);
  const [feedList, setFeedList] = useState([
    {
      author: {
        image: '',
        username: '',
        accountname: '',
      },
      content: '',
      image: '',
      heartCount: 0,
      comments: [],
      updatedAt: '',
      id: '',
      hearted: false,
    },
  ]);
  async function getFeedInfo() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await axios(`${url}/post/${whichUser}/userpost`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setFeedList(response.data.post);
    console.log(response.data.post);
    response.data.post.forEach((post) => {
      if (post.image !== '') {
        setNoImageFeedList((current) => [...current, post.image]);
      }
    });
  }

  useEffect(() => {
    getFeedInfo();
  }, [whichUser]);

  const ChangeFeedStyle = () => {
    setFeedStyle((current) => !current);
  };

  return (
    <div>
      {feedState ? (
        <div>
          <FeedHeader marginTop={feedHeaderMarginTop}>
            <ButtonCard
              onClick={ChangeFeedStyle}
              type="button"
              disabled={feedStyle}
            >
              {feedStyle ? (
                <ImgList
                  src={`${process.env.PUBLIC_URL}/img/icon/icon-post-list-on.png`}
                  alt=""
                />
              ) : (
                <ImgList
                  src={`${process.env.PUBLIC_URL}/img/icon/icon-post-list-off.png`}
                  alt=""
                />
              )}
            </ButtonCard>
            <ButtonAlbum
              onClick={ChangeFeedStyle}
              type="button"
              disabled={!feedStyle}
            >
              {feedStyle ? (
                <ImgAlbum
                  src={`${process.env.PUBLIC_URL}/img/icon/icon-post-album-off.png`}
                  alt=""
                />
              ) : (
                <ImgAlbum
                  src={`${process.env.PUBLIC_URL}/img/icon/icon-post-album-on.png`}
                  alt=""
                />
              )}
            </ButtonAlbum>
          </FeedHeader>
          <div>
            {feedStyle ? (
              feedList.map((feed) => (
                <FeedCard
                  key={`${feed.id}`}
                  authorImage={feed.author.image}
                  userName={feed.author.username}
                  accountName={feed.author.accountname}
                  content={feed.content}
                  contentimage={feed.image !== undefined ? feed.image : ''}
                  heartCount={feed.heartCount}
                  comment={feed.comments}
                  updatedAt={feed.updatedAt}
                  postid={feed.id}
                  hearted={feed.hearted}
                />
              ))
            ) : (
              <FeedAlbumContainer>
                {noImageFeedList.map((feedImage) => (
                  <FeedAlbum
                    key={Math.random() * 100}
                    contentimage={feedImage}
                  />
                ))}
              </FeedAlbumContainer>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default FeedContainer;

FeedContainer.propTypes = {
  feedState: PropTypes.bool.isRequired,
  feedHeaderMarginTop: PropTypes.string.isRequired,
  whichUser: PropTypes.string.isRequired,
};

const FeedAlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(114px, 146px));
  grid-auto-rows: minmax(114px, 30vw);
  gap: 8px;
  padding: 16px;
  margin-bottom: 59px;
  background-color: white;
`;

const FeedHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 9px 15px;
  margin-top: 0px;
  margin-top: ${(props) => props.marginTop || '316px'};
  border-bottom: 0.5px solid #dbdbdb;
  background-color: white;
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
  margin-left: 8px;
  border: none;
  background-color: inherit;
`;
