import React, { useState, Fragment } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from './Modal';

export default function Header({ postDetail, forLink }) {
  const navigate = useNavigate();
  const [showing, setShowing] = useState(false);
  const showModal = () => {
    setShowing(!showing);
  };

  return (
    <HeaderContainer>
      {postDetail ? (
        <ProfileLink to={`/profile/${forLink}`}>
          <img src="/img/icon/icon-arrow-left.svg" alt="이전 페이지 버튼" />
        </ProfileLink>
      ) : (
        <PrevBtn type="button" onClick={() => navigate(-1)}>
          <img src="/img/icon/icon-arrow-left.svg" alt="이전 페이지 버튼" />
        </PrevBtn>
      )}
      <MoreBtn type="button" onClick={showModal}>
        <img src="/img/icon/icon- more-vertical.svg" alt="더보기 버튼" />
      </MoreBtn>
      <Modal
        showing={showing ? 'active' : null}
        showModal={showModal}
        list={['설정 및 개인정보', '로그아웃']}
      />
    </HeaderContainer>
  );
}

Header.defaultProps = {
  postDetail: false,
  forLink: 'chango_kr',
};

Header.propTypes = {
  postDetail: PropTypes.bool,
  forLink: PropTypes.string,
};

const ProfileLink = styled(Link)`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  border: none;
  background: none;
  cursor: pointer;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 48px;
  padding: 12px 12px 12px 16px;
  border-bottom: 1px solid #dbdbdb;
  background: #fff;
  z-index: 100;
`;

const PrevBtn = styled.button`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  border: none;
  background: none;
  cursor: pointer;
`;

const MoreBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
`;
