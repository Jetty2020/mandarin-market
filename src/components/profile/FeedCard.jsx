import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../constants';

function FeedCard({
  authorImage,
  userName,
  accountName,
  content,
  contentimage,
  heartCount,
  comment,
  updatedAt,
  postid,
  hearted,
}) {
  const [sepImage, setSepImage] = useState([]);
  const [heartedState, setHeartedState] = useState(false);
  const [heartedCount, setHeartedCount] = useState(0);

  const updatedDate = `${updatedAt.slice(0, 4)}년 ${updatedAt.slice(
    5,
    7,
  )}월 ${updatedAt.slice(8, 10)}일`;

  async function addHeart() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await axios(`${url}/post/${postid}/heart`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    console.log(response);
    setHeartedState(true);
    setHeartedCount((current) => current + 1);
  }

  async function removeHeart() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await axios(`${url}/post/${postid}/unheart`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setHeartedState(false);
    setHeartedCount((current) => current - 1);
  }

  // async function getHearted(postid) {
  //   const token = localStorage.getItem('token');
  //   const url = SERVER_BASE_URL;
  //   const response = await axios(`${url}/post/${postid}`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'Content-type': 'application/json',
  //     },
  //   });
  //   console.log(response);
  // }

  useEffect(() => {
    if (typeof contentimage !== 'undefined') {
      setSepImage(contentimage.split(','));
    }
    setHeartedState(hearted);
    setHeartedCount(heartCount);
  }, []);

  return (
    <Contents>
      <GotoProfile to="/none">
        <LinkWrapper src={`${authorImage}`} />
      </GotoProfile>
      <FeedContents>
        <FeedMenu>
          <ImgMore
            src={`${process.env.PUBLIC_URL}/img/icon/icon-more-vertical.png`}
            alt=""
          />
        </FeedMenu>
        <FeedTitle>{userName}</FeedTitle>
        <FeedId>{`@ ${accountName}`}</FeedId>
        <FeedContent>{content}</FeedContent>
        {contentimage !== '' ? (
          <ImgContainer>
            {sepImage.map((image) => (
              <ImgWrapper key={Math.random() * 100}>
                <ImgPost src={image} alt="" />
              </ImgWrapper>
            ))}
          </ImgContainer>
        ) : null}
        <FeedIcon>
          {heartedState ? (
            <HeartBtn
              onClick={() => {
                removeHeart();
              }}
            />
          ) : (
            <NoHeartBtn
              onClick={() => {
                addHeart();
              }}
            />
          )}
          <NumOf>{heartedCount}</NumOf>
          <ImgMessage
            src={`${process.env.PUBLIC_URL}/img/icon/icon-message-circle.svg`}
            alt=""
          />
          <NumOf>{comment.length}</NumOf>
        </FeedIcon>
        <FeedDate>{updatedDate}</FeedDate>
      </FeedContents>
    </Contents>
  );
}

export default FeedCard;

FeedCard.propTypes = {
  authorImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  accountName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentimage: PropTypes.string.isRequired,
  heartCount: PropTypes.number.isRequired,
  comment: PropTypes.arrayOf(PropTypes.string).isRequired,
  updatedAt: PropTypes.string.isRequired,
  postid: PropTypes.string.isRequired,
  hearted: PropTypes.bool.isRequired,
};

const ImgContainer = styled.div`
  display: flex;
  width: 296px;
  height: 228px;
  overflow: scroll;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
`;

const ImgWrapper = styled.div``;

const ImgPost = styled.img`
  display: block;
  width: 294px;
  height: 226px;
  object-fit: fill;
`;

const Contents = styled.div`
  background-color: white;
  display: flex;
  padding: 16px 21px;
  margin-bottom: 6px;
  position: relative;

  &:last-child {
    margin-bottom: 65px;
  }
`;

const LinkWrapper = styled.img`
  width: 42px;
  height: 42px;
`;

const GotoProfile = styled(Link)`
  margin-right: 12px;
`;

const FeedContents = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 389px;
`;

const FeedTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
const FeedId = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #767676;
  margin-top: 2px;
  margin-bottom: 16px;
`;
const FeedContent = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
`;

const FeedIcon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14.73px;
  margin-bottom: 18.73px;
`;

const FeedDate = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: #767676;
`;

const NoHeartBtn = styled.button`
  background: url('img/icon/icon-heart.png') no-repeat center;
  width: 20px;
  height: 20px;
  margin-right: 6px;
  border: none;
`;

const HeartBtn = styled.button`
  background: url('img/icon/icon-heart-active.png') no-repeat center;
  width: 20px;
  height: 20px;
  margin-right: 6px;
  border: none;
`;

const ImgMessage = styled.img`
  width: 19.5px;
  height: 19.5px;
  margin-right: 6px;
`;

const NumOf = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #767676;
  margin-right: 16px;
`;

const FeedMenu = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
`;

const ImgMore = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
