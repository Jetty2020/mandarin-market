import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SERVER_BASE_URL } from '../../constants';

export default function EditPage({ postid }) {
  const navigate = useNavigate();
  const loginUser = localStorage.getItem('account');
  const token = localStorage.getItem('token');
  const [typed, setTyped] = useState('');
  const ref = useRef(null);

  const onChange = (event) => {
    setTyped(event.target.value);
  };
  const resizeHeight = useCallback(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = '10vh';
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, []);
  useEffect(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = '10vh';
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, []);

  const [profileImg, setProfileImg] = useState('/img/Ellipse 6.png');
  const [imageArr, setImageArr] = useState([]);
  const imageUrls = imageArr.toString();

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

  const getFeed = async () => {
    const feedData = await (
      await axios.get(`${SERVER_BASE_URL}/post/${postid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
    ).data;
    setTyped(feedData.post.content);
  };
  useEffect(() => {
    getFeed();
  }, []);

  const editPost = async () => {
    const updateData = {
      post: {
        content: typed,
        image: imageUrls,
      },
    };
    try {
      const res = await axios.put(
        `${SERVER_BASE_URL}/post/${postid}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res);
      navigate('/profile');
    } catch (err) {
      console.log(err);
    }
  };
  const onClickUpload = (event) => {
    event.preventDefault();
    editPost();
  };

  EditPage.propTypes = {
    postid: PropTypes.string.isRequired,
  };

  return (
    <UploadContainer>
      <ProfileImage src={profileImg} alt="프로필 사진" />
      <PostForm>
        <PostTextArea
          ref={ref}
          onChange={onChange}
          onInput={resizeHeight}
          value={typed}
          placeholder="게시글 입력하기..."
          spellCheck="false"
        />
        <UploadBtn
          type="submit"
          onClick={onClickUpload}
          color={typed ? '#F26E22' : '#FFC7A7'}
          disabled={!typed}
        >
          수정
        </UploadBtn>
        <UploadImgBtn htmlFor="uploadImage">
          <img src="../img/upload-file.png" alt="이미지 첨부" />
          <input
            type="file"
            title=" "
            accept="image/*"
            id="uploadImage"
            multiple
          />
        </UploadImgBtn>
      </PostForm>
    </UploadContainer>
  );
}

const UploadContainer = styled.main`
  display: flex;
  margin-top: 48px;
  padding: 20px 16px;
`;

const ProfileImage = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
`;

const PostForm = styled.form`
  width: 100%;
`;

const PostTextArea = styled.textarea`
  width: 100%;
  margin-top: 12px;
  border: none;
  background: none;
  font-size: 14px;
  outline: none;
  resize: none;
  &::placeholder {
    color: #c4c4c4;
  }
`;

const UploadBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 16px;
  width: 90px;
  height: 32px;
  border: none;
  border-radius: 32px;
  background: ${(props) => props.color};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.4s ease;
  z-index: 150;
  cursor: ${(props) => (props.disabled === true ? 'default' : 'pointer')};
`;

const UploadImgBtn = styled.label`
  position: absolute;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
  }
  input[type='file'] {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }
`;
