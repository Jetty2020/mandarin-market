import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { SERVER_BASE_URL } from '../../constants';

function EditContainer() {
  const account = localStorage.getItem('account');
  const [profileImg, setProfileImg] = useState('/img/basic-profile-img.png');
  const [userName, setUserName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [introInfo, setIntroInfo] = useState('');
  const [imageName, setImageName] = useState('');
  const [userWarning, setUserWarning] = useState(false);
  const [accountWarning, setAccountWarning] = useState(false);
  const image = useRef(null);

  async function getProfile() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await axios(`${url}/profile/${account}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setProfileImg(response.data.profile.image);
    setImageName(response.data.profile.image.slice(26));
    setUserName(response.data.profile.username);
    setAccountName(response.data.profile.accountname);
    setIntroInfo(response.data.profile.intro);
  }

  const EditUserName = (event) => {
    setUserName(event.target.value);
  };
  const EditAccountName = (event) => {
    setAccountName(event.target.value);
  };
  const EditIntroInfo = (event) => {
    setIntroInfo(event.target.value);
  };

  async function imageUpload(files) {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const formData = new FormData();
    formData.append('image', files[0]);
    const res1 = await axios.post(`${url}/image/uploadfile`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const productImgName = res1.data.filename;
    setProfileImg(`${SERVER_BASE_URL}/${productImgName}`);
    setImageName(productImgName);
    return productImgName;
  }

  async function SendInfo(imagePARAM) {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const res2 = await fetch(`${url}/user`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: userName,
          accountname: accountName,
          intro: introInfo,
          image: `${SERVER_BASE_URL}/${imagePARAM}`,
        },
      }),
    });
    localStorage.setItem('account', accountName);
    const data = await res2.json();
  }

  async function EditImage(e) {
    e.preventDefault();
    const files = [...e.target.files];
    const result = await imageUpload(files);
  }

  async function SaveInfo() {
    const result = await SendInfo(imageName);
  }

  const userNameCheck = () => {
    const userNameRegx = /^.{2,10}$/;
    if (userNameRegx.test(userName)) {
      setUserWarning(false);
    } else {
      setUserWarning(true);
    }
  };

  const accountNameCheck = () => {
    const accountNameRegx = /^[a-zA-Z0-9???-??????-??????-???_.]*$/;
    if (accountNameRegx.test(accountName)) {
      setAccountWarning(false);
    } else {
      setAccountWarning(true);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    accountNameCheck();
  }, [accountName]);

  useEffect(() => {
    userNameCheck();
  }, [userName]);

  return (
    <div>
      <EditHeader>
        <Link to="/profile">
          <img
            src="/img/icon/icon-arrow-left.png"
            alt="????????????"
            className="preview"
          />
        </Link>
        {userName.length > 1 ? (
          <SaveLink
            to={`/profile/${accountName}`}
            onClick={() => {
              SaveInfo();
            }}
          >
            ??????
          </SaveLink>
        ) : (
          <SaveBtn>??????</SaveBtn>
        )}
      </EditHeader>
      <EditWrapper>
        <EditForm>
          <LabelImg htmlFor="image">
            <ProfileImg src={profileImg} alt="????????? ?????? ??????" />
            <ImgIcon src="/img/upload-file.png" />
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={image}
              id="image"
              onChange={EditImage}
            />
          </LabelImg>
          <Label htmlFor="username">
            ????????? ??????
            <Input
              type="text"
              id="username"
              placeholder="2~10??? ???????????? ?????????."
              value={userName}
              onChange={EditUserName}
              maxlength="10"
            />
          </Label>
          <Warning warningState={userWarning}>
            *2~10?????? ????????? ?????? ???????????????.
          </Warning>
          <Label htmlFor="accountname">
            ?????? name
            <Input
              type="text"
              id="accountname"
              placeholder="??????, ??????, ????????????(.),(_)??? ?????? ???????????????."
              value={accountName}
              onChange={EditAccountName}
              maxlength="10"
            />
          </Label>
          <Warning warningState={accountWarning}>
            *??????, ??????, ?????? ??? ???????????? ????????? ??? ????????????.
          </Warning>
          <Label htmlFor="intro">
            ??????
            <Input
              type="text"
              id="intro"
              placeholder="????????? ????????? ????????? ?????? ????????? ?????????!"
              value={introInfo}
              onChange={EditIntroInfo}
              maxlength="25"
            />
          </Label>
        </EditForm>
      </EditWrapper>
    </div>
  );
}

export default EditContainer;

const EditHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid #dbdbdb;
`;

const SaveBtn = styled.button`
  padding: 7px 33px 7px 31px;
  background-color: #f26e22;
  border: none;
  border-radius: 32px;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

const SaveLink = styled(Link)`
  padding: 7px 33px 7px 31px;
  background-color: #f26e22;
  border: none;
  border-radius: 32px;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

const EditWrapper = styled.div`
  padding: 30px 34px;
`;

const LabelImg = styled.label`
  position: relative;
  overflow: hidden;
  margin: 0px auto;
`;

const ImgIcon = styled.img`
  position: absolute;
  bottom: 35px;
  right: 0px;
  width: 36px;
  height: 36px;
`;

const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  margin: 0px auto;
  margin-bottom: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 55px;
`;

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #767676;
  font-size: 12px;
  font-weight: 500;
`;

const Input = styled.input`
  height: 32px;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 16px;
  color: black;
  font-size: 14px;
  font-weight: 400;

  &::placeholder {
    color: #dbdbdb;
    font-size: 14px;
    font-weight: 400;
  }
`;

const Warning = styled.p`
  display: ${(props) => (props.warningState ? 'block' : 'none')};
  margin-top: -10px;
  color: #eb5757;
  font-size: 12px;
`;
