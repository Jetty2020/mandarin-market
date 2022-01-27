import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import FeedCard from './FeedCard';
import Header from '../common/Header';
import CommentCard from './CommentCard';
import { SERVER_BASE_URL } from '../../constants';

function PostDetailCard({ postid }) {
  const [postInfo, setPostInfo] = useState({
    author: {
      image: '/img/basic-profile-img.png',
      username: 'username',
      accountname: 'accountname',
    },
    content: '',
    image: '',
    heartCount: 0,
    comments: [],
    createdAt: '',
    id: '',
    hearted: false,
  });

  const [commentList, setCommentList] = useState([]);
  const [commentContent, setCommentContent] = useState('');
  const [inputState, setInputState] = useState(false);
  const [alive, setAlive] = useState(true);
  const [header, setHeader] = useState(true);
  const [moreBtnList, setMoreBtnList] = useState([]);
  const loginUser = localStorage.getItem('account');
  const token = localStorage.getItem('token');
  const [profileImg, setProfileImg] = useState('/img/Ellipse 6.png');

  const getProfile = async () => {
    const data = await (
      await axios.get(`${SERVER_BASE_URL}/profile/${loginUser}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
    ).data;
    setProfileImg(data.profile.image);
  };
  useEffect(() => {
    getProfile();
  }, []);

  async function getCommentList() {
    const url = SERVER_BASE_URL;
    const response = await axios(`${url}/post/${postid}/comments`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setCommentList(response.data.comments.reverse());
  }

  async function addComment(value) {
    const url = SERVER_BASE_URL;
    const response = await fetch(`${url}/post/${postid}/comments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        comment: {
          content: value,
        },
      }),
    });
    const data = await response.json();
  }

  const onClickAddComment = (e) => {
    addComment(commentContent);
    setCommentContent('');
  };

  useEffect(() => {
    getCommentList();
  }, []);

  async function getPostDetail() {
    const url = SERVER_BASE_URL;
    const response = await axios(`${url}/post/${postid}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setPostInfo(response.data.post);
  }

  useEffect(() => {
    getPostDetail();
  }, []);

  const onChange = (event) => {
    setCommentContent(event.target.value);
  };

  useEffect(() => {
    if (commentContent.length > 0) {
      setInputState(true);
    } else {
      setInputState(false);
    }
  }, [commentContent]);

  return (
    <PostDetailWrapper>
      <Header postDetail={header} forLink={postInfo.author.accountname} />
      <PostDetailInfo>
        <FeedCard
          authorImage={postInfo.author.image}
          userName={postInfo.author.username}
          accountName={postInfo.author.accountname}
          content={postInfo.content}
          contentimage={postInfo.image}
          heartCount={postInfo.heartCount}
          comment={postInfo.comments}
          createdAt={postInfo.createdAt}
          postid={postInfo.id}
          hearted={postInfo.hearted}
        />
        <Hr />
      </PostDetailInfo>
      <CommentList>
        {commentList.map((comment) => (
          <CommentCard
            key={comment.id}
            userImg={comment.author.image}
            userName={comment.author.username}
            accountName={comment.author.accountname}
            content={comment.content}
            createdAt={comment.createdAt}
            commentId={comment.id}
            postId={postid}
            alive={alive}
          />
        ))}
      </CommentList>
      <CommentForm>
        <InputImg src={profileImg} alt="프로필" />
        <CommentInputDiv>
          <CommentLabel htmlFor="comment">
            <CommentInput
              type="text"
              id="comment"
              placeholder="댓글 입력하기..."
              onChange={onChange}
              value={commentContent}
            />
          </CommentLabel>
        </CommentInputDiv>
        <InputBtn
          state={inputState}
          disabled={!inputState}
          onClick={() => {
            onClickAddComment();
          }}
        >
          게시
        </InputBtn>
      </CommentForm>
    </PostDetailWrapper>
  );
}

export default PostDetailCard;

PostDetailCard.propTypes = {
  postid: PropTypes.string.isRequired,
};

const PostDetailWrapper = styled.div`
  position: relative;
`;

const PostDetailInfo = styled.div`
  margin-top: 49px;
`;

const Hr = styled.div`
  border-bottom: 0.5px solid #dbdbdb;
`;

const CommentList = styled.div`
  padding-bottom: 81px;
`;

const CommentForm = styled.form`
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 61px;
  padding: 12.5px 16px;
  border-top: 0.5px solid #dbdbdb;
  background-color: white;
`;

const CommentLabel = styled.label``;

const CommentInput = styled.input`
  width: 65vw;
  height: 100%;
  color: black;
  font-size: 14px;
  font-weight: 400;

  &::placeholder {
    color: #c4c4c4;
    font-size: 14px;
    font-weight: 400;
  }
`;

const InputImg = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 18px;
  border-radius: 18px;
`;

const InputBtn = styled.button`
  margin-left: 18px;
  border: none;
  background-color: inherit;
  color: ${(props) => (props.state ? '#f26e22' : '#c4c4c4')};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const CommentInputDiv = styled.div``;
