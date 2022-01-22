import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SERVER_BASE_URL } from '../../constants';

function SearchBar({ setSearchDatas }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    const response = await axios(
      `${SERVER_BASE_URL}/user/searchuser/?keyword=${searchQuery}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    setSearchDatas(response.data);
    setSearchQuery('');
  };
  return (
    <Container>
      <SearchImg
        src="img/icon/icon-arrow-left.png"
        alt="뒤로가기"
        onClick={() => navigate(-1)}
      />
      <form onSubmit={handleSubmit}>
        <SearchInput
          placeholder="계정 검색"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
      </form>
    </Container>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  setSearchDatas: PropTypes.func.isRequired,
};

const SearchInput = styled.input`
  background: #f2f2f2;
  height: 32px;
  border-radius: 32px;
  left: 58px;
  bottom: 37px;
  width: 80vw;
  display: flex;
  align-items: flex-end;
  position: relative;
  padding-left: 13px;
  line-height: 100px;
  color: #000000;
  font-size: 14px;
  ::placeholder {
    position: relative;
    padding: 10px;
    color: #c4c4c4;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 52px;
  border-bottom: 1px solid #dbdbdb;
  background: #fff;
`;
const SearchImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12.5px;
`;
