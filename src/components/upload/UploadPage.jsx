import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SERVER_BASE_URL } from '../../constants';

export default function UploadPage() {
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

  const [addedImgUrl, setAddedImgUrl] = useState('');
  const [imageArr, setImageArr] = useState([]);
  const [imageUrls, setImageUrls] = useState('');

  const imageUpload = async (files) => {
    const formData = new FormData();
    formData.append('image', files[0]);
    const uploadedImg = await (
      await axios.post(`${SERVER_BASE_URL}/image/uploadfile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
    ).data;
    const imgName = uploadedImg.filename;
    setAddedImgUrl(`${SERVER_BASE_URL}/${imgName}`);
  };
  const addImage = (event) => {
    const files = [...event.target.files];
    imageUpload(files);
  };

  useEffect(() => {
    if (addedImgUrl !== '') {
      setImageArr((currentArr) => [...currentArr, addedImgUrl]);
      setAddedImgUrl('');
    } else if (addedImgUrl === '') {
      setImageUrls(imageArr.toString());
    }
  }, [addedImgUrl]);

  const onRemove = async (index) => {
    const newArr = imageArr.filter((_, filterindex) => filterindex !== index);
    const imgLength = newArr.length;
    if (imgLength === 0) {
      setImageArr([]);
      setImageUrls('');
    } else {
      setImageArr(newArr);
      setImageUrls(newArr.toString());
    }
  };

  const uploadPost = async () => {
    const postData = {
      post: {
        content: typed,
        image: imageUrls,
      },
    };
    await axios.post(`${SERVER_BASE_URL}/post`, postData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    navigate('/profile');
  };

  const onClickUpload = (event) => {
    event.preventDefault();
    uploadPost();
  };

  return (
    <>
      <UploadContainer>
        <PageTitle>게시글 등록 페이지</PageTitle>
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
            업로드
          </UploadBtn>
          <UploadImgBtn htmlFor="uploadImage">
            <img src="../img/upload-file.png" alt="이미지 첨부" />
            <input
              type="file"
              title=" "
              accept="image/*"
              id="uploadImage"
              onChange={addImage}
            />
          </UploadImgBtn>
        </PostForm>
      </UploadContainer>
      {imageArr && (
        <PhotoContainer>
          <SectionTitle>첨부한 이미지 목록</SectionTitle>
          <PhotoList>
            {imageArr.map((photo, index) => (
              <PhotoItem key={photo}>
                <img src={photo} alt="" />
                <DeleteBtn type="button" onClick={() => onRemove(index)}>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/icon/icon-delete.svg`}
                    alt="이미지 삭제"
                  />
                </DeleteBtn>
              </PhotoItem>
            ))}
          </PhotoList>
        </PhotoContainer>
      )}
    </>
  );
}

const UploadContainer = styled.main`
  display: flex;
  margin-top: 48px;
  padding: 20px 16px;
`;

const PageTitle = styled.h2`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
  clip: rect(0, 0, 0, 0);
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

const PhotoContainer = styled.section`
  display: flex;
  overflow-x: scroll;
  width: calc(100% - 70px);
  margin-left: 70px;
`;

const SectionTitle = styled.h3`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
  clip: rect(0, 0, 0, 0);
`;

const PhotoList = styled.ul`
  display: flex;
  gap: 8px;
`;

const PhotoItem = styled.li`
  overflow: hidden;
  position: relative;
  width: 168px;
  height: 126px;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  border: none;
  background: none;
  cursor: pointer;
  img {
    width: 50%;
  }
`;
