import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../constants';

function CommentCard({
  userImg,
  userName,
  accountName,
  content,
  createdAt,
  commentId,
  postId,
  alive,
}) {
  const [DORState, setDORState] = useState(false);
  const [ownAccount, setOwnAccount] = useState(false);
  const [d, setD] = useState(0);
  const [howPass, setHowPass] = useState('');

  async function removeComment() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await axios(
      `${url}/post/${postId}/comments/${commentId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    window.location.reload();
  }

  const onClickDOR = (e) => {
    if (DORState) {
      setD(0);
    } else {
      setD(102);
    }
    setDORState((current) => !current);
  };

  const closeModal = () => {};

  useEffect(() => {
    const ownUser = localStorage.getItem('account');
    if (ownUser === accountName) {
      setOwnAccount(true);
    }
  }, []);

  const getHowPass = (createdTime) => {
    const commentTime = `${createdTime.slice(5, 7)}월 ${createdTime.slice(
      8,
      10,
    )}일`;
    return commentTime;
    // const tempTime = new Date(
    //   parseInt(createdTime.slice(0, 4), 10),
    //   parseInt(createdTime.slice(5, 7), 10),
    //   parseInt(createdTime.slice(8, 10), 10),
    //   parseInt(createdTime.slice(11, 13), 10),
    //   parseInt(createdTime.slice(14, 16), 10),
    //   parseInt(createdTime.slice(17, 19), 10),
    // );
  };

  useEffect(() => {
    setHowPass(getHowPass(createdAt));
  }, []);

  return (
    <div>
      <CommentWrapper>
        <GotoProfile to={`/profile/${accountName}`}>
          <CommentProfileImg src={`${userImg}`} alt="" />
        </GotoProfile>
        <CommentInfo>
          <UserInfo>
            <UserName>{userName}</UserName>
            <CommentTime>{howPass}</CommentTime>
          </UserInfo>
          <CommentContent>{content}</CommentContent>
        </CommentInfo>
        <MoreBtn onClick={onClickDOR} />
      </CommentWrapper>
      <DORModatl className={DORState} onClick={onClickDOR}>
        <DeleteOrReport DORState={DORState} className={DORState} d={d}>
          {ownAccount ? (
            <DeleteBtn onClick={() => removeComment()}>삭제</DeleteBtn>
          ) : (
            <DeleteBtn>신고하기</DeleteBtn>
          )}
        </DeleteOrReport>
      </DORModatl>
    </div>
  );
}

export default CommentCard;

CommentCard.propTypes = {
  userImg: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  accountName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  alive: PropTypes.bool.isRequired,
};

const DeleteBtn = styled.button`
  display: flex;
  width: 100%;
  border: none;
  background-color: white;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

const DORModatl = styled.div`
  display: none;
  position: fixed;
  z-index: 499;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.25);

  &.true {
    display: block;
  }
`;

const DeleteOrReport = styled.div`
  /* position: fixed;
  z-index: 500;
  bottom: -100px;
  width: 100vw;
  height: 102px;
  border: 2px solid blue;
  background-color: white;
  transition: bottom 1s linear;

  &.true {
    bottom: 0px;
  } */

  position: fixed;
  bottom: -102px;
  left: 0;
  right: 0;
  padding-top: 50px;
  padding-left: 26px;
  padding-bottom: 26px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #fff;
  z-index: 500;
  transition: 0.5s all ease;

  transform: ${(props) => (props.d ? 'translateY(-102px)' : 'translateY(0px)')};
`;

const CommentWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 0px 16px;
  margin-top: 25px;

  &:last-child {
    padding-bottom: 20px;
  }
`;

const GotoProfile = styled(Link)`
  height: 36px;
`;

const CommentProfileImg = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 18px;
`;

const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const UserName = styled.p`
  margin-right: 6px;
  font-size: 14px;
  font-weight: 500;
`;

const CommentTime = styled.p`
  color: #767676;
  font-size: 10px;
  font-weight: 400;
`;

const CommentContent = styled.p`
  color: #333333;
  font-size: 14px;
  font-weight: 400;
`;

const MoreBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 0px;
  width: 20px;
  height: 20px;
  border: none;
  background-color: inherit;
  background-image: url('/img/icon/icon-more-vertical.png');
  cursor: pointer;
`;

const MoreIcon = styled.img`
  width: 20px;
  height: 20px;
`;
