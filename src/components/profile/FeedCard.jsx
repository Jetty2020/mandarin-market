import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import FeedModal from '../modal/FeedModal';
import { SERVER_BASE_URL } from '../../constants';

function FeedCard({
  authorImage,
  userName,
  accountName,
  content,
  contentimage,
  heartCount,
  comment,
  createdAt,
  postid,
  hearted,
}) {
  const [sepImage, setSepImage] = useState([]);
  const [heartedState, setHeartedState] = useState(false);
  const [heartedCount, setHeartedCount] = useState(0);
  const [showing, setShowing] = useState(false);
  const [imageNum, setImageNum] = useState(0);
  const [carouselMove, setCarouselMove] = useState(0);
  const [activedImg, setActivedImg] = useState([true, false, false]);
  const loginUser = localStorage.getItem('account');

  const activeImg = (which) => {
    const tempArr = activedImg;
    for (let i = 0; i < activedImg.length; i += 1) {
      tempArr[i] = false;
      if (i === which) {
        tempArr[i] = true;
      }
    }
    setActivedImg(tempArr);
  };
  const showModal = () => {
    setShowing(!showing);
  };
  const countImageNum = () => {
    setImageNum(sepImage.length);
  };
  const moveCarousel = (move) => {
    setCarouselMove(move);
  };
  const updatedDate = `${createdAt.slice(0, 4)}년 ${createdAt.slice(
    5,
    7,
  )}월 ${createdAt.slice(8, 10)}일`;

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
    setHeartedState(true);
    useEffect(() => {
      if (typeof contentimage !== 'undefined') {
        setSepImage(contentimage.split(','));
      }
    }, []);
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

  useEffect(() => {
    if (typeof contentimage !== 'undefined') {
      setSepImage(contentimage.split(','));
    }
    setHeartedState(hearted);
    setHeartedCount(heartCount);
  }, [heartCount]);

  useEffect(() => {
    countImageNum();
  }, [sepImage]);

  useEffect(() => {
    if (typeof contentimage !== 'undefined') {
      setSepImage(contentimage.split(','));
    }
  }, [contentimage]);

  return (
    <Contents>
      <GotoProfile to={`/profile/${accountName}`}>
        <LinkWrapper src={`${authorImage}`} />
      </GotoProfile>
      <FeedContents>
        <FeedTitle>{userName}</FeedTitle>
        <FeedId>{`@ ${accountName}`}</FeedId>
        <FeedContent>{content}</FeedContent>
        {contentimage !== '' ? (
          <SliderContainer>
            {imageNum === 2 ? (
              <CarouselWrapper>
                <CarouselBtn1
                  onClick={() => {
                    moveCarousel(0);
                    activeImg(0);
                  }}
                  type="button"
                  active={activedImg[0]}
                  anime="ImgSlide1 1s linear"
                >
                  {' '}
                </CarouselBtn1>
                <CarouselBtn2
                  onClick={() => {
                    moveCarousel(-294);
                    activeImg(1);
                  }}
                  type="button"
                  active={activedImg[1]}
                  anime="ImgSlide2 1s linear"
                >
                  {' '}
                </CarouselBtn2>
              </CarouselWrapper>
            ) : null}
            {imageNum === 3 ? (
              <CarouselWrapper>
                <CarouselBtn1
                  onClick={() => {
                    moveCarousel(0);
                    activeImg(0);
                  }}
                  type="button"
                  active={activedImg[0]}
                >
                  {' '}
                </CarouselBtn1>
                <CarouselBtn2
                  onClick={() => {
                    moveCarousel(-294);
                    activeImg(1);
                  }}
                  type="button"
                  active={activedImg[1]}
                >
                  {' '}
                </CarouselBtn2>
                <CarouselBtn3
                  onClick={() => {
                    moveCarousel(-588);
                    activeImg(2);
                  }}
                  type="button"
                  active={activedImg[2]}
                >
                  {' '}
                </CarouselBtn3>
              </CarouselWrapper>
            ) : null}
            <ImgContainer moveImage={carouselMove}>
              {sepImage.map((image) => (
                <ImgWrapper key={Math.random() * 100}>
                  <ImgPost src={image} alt="" />
                </ImgWrapper>
              ))}
            </ImgContainer>
          </SliderContainer>
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
          <Link to={`/postdetail/${postid}`}>
            <ImgMessage
              src={`${process.env.PUBLIC_URL}/img/icon/icon-message-circle.svg`}
              alt="댓글 보기"
            />
          </Link>
          <NumOf>{comment.length}</NumOf>
        </FeedIcon>
        <FeedDate>{updatedDate}</FeedDate>
        <FeedMenu>
          <MoreBtn onClick={showModal}>
            <img
              src={`${process.env.PUBLIC_URL}/img/icon/s-icon-more-vertical.png`}
              alt="게시물 수정/삭제 버튼"
            />
          </MoreBtn>
          <FeedModal
            showing={showing ? 'active' : null}
            showModal={showModal}
            list={accountName === loginUser ? ['삭제', '수정'] : ['신고하기']}
            postid={postid}
          />
        </FeedMenu>
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
  createdAt: PropTypes.string.isRequired,
  postid: PropTypes.string.isRequired,
  hearted: PropTypes.bool.isRequired,
};

const SliderContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 296px;
  height: 228px;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
`;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: calc(50%);
  width: 62px;
  z-index: 5;
  transform: translateX(-50%);
`;

const CarouselBtn1 = styled.button`
  width: 6px;
  height: 6px;
  border: 0.5px solid #dbdbdb;
  border-radius: 3px;
  background-color: ${(props) => (props.active ? 'orange' : '#ffffff')};
  cursor: pointer;
`;

const CarouselBtn2 = styled.button`
  width: 6px;
  height: 6px;
  margin-left: 6px;
  border: 0.5px solid #dbdbdb;
  border-radius: 3px;
  background-color: ${(props) => (props.active ? 'orange' : '#ffffff')};
  cursor: pointer;
`;

const CarouselBtn3 = styled.button`
  width: 6px;
  height: 6px;
  margin-left: 6px;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? 'orange' : '#ffffff')};
  cursor: pointer;
`;

const ImgContainer = styled.div`
  display: flex;
  transition: all 0.3s linear;
  transform: ${(props) =>
    `translateX(${props.moveImage}px)` || 'translateX(0px)'};
`;

const ImgWrapper = styled.div``;

const ImgPost = styled.img`
  display: block;
  width: 294px;
  height: 226px;
  object-fit: cover;
  transition: all 1s ease-in-out;
`;

const Contents = styled.div`
  display: flex;
  position: relative;
  padding: 16px 21px;
  margin-bottom: 6px;
  background-color: white;

  &:last-child {
    margin-bottom: 65px;
  }
`;

const LinkWrapper = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 21px;
`;

const GotoProfile = styled(Link)`
  margin-right: 12px;
  height: 42px;
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
  margin-top: 2px;
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #767676;
`;
const FeedContent = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
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
  width: 20px;
  height: 20px;
  margin-right: 6px;
  border: none;
  background: url('/img/icon/icon-heart.png') no-repeat center;
`;

const HeartBtn = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 6px;
  border: none;
  background: url('/img/icon/icon-heart-active.png') no-repeat center;
`;

const ImgMessage = styled.img`
  width: 19.5px;
  height: 19.5px;
  margin-right: 6px;
`;

const NumOf = styled.p`
  margin-right: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #767676;
`;

const FeedMenu = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
`;

const MoreBtn = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  background: none;
  cursor: pointer;
`;
