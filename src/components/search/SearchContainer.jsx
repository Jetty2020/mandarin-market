import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SearchContainer({ datas }) {
  return (
    <SearchCon>
      {datas.map((data) => {
        const { accountname, username, image } = data;
        return (
          <Link to={`/profile/${accountname}`}>
            <SearchItem>
              <SearchConPicture src={image} alt="프로필 사진" />
              <SearchConProfile>
                <SearchContainProfileNickName>
                  {username}
                </SearchContainProfileNickName>
                <SearchContainProfileId>{`@${accountname}`}</SearchContainProfileId>
              </SearchConProfile>
            </SearchItem>
          </Link>
        );
      })}
    </SearchCon>
  );
}

SearchContainer.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const SearchCon = styled.div`
  padding: 20px;
  margin-top: 60px;
`;

const SearchConPicture = styled.img`
  flex-direction: column;
  width: 50px;
`;

const SearchConProfile = styled.p`
  padding-left: 15px;
`;

const SearchContainProfileNickName = styled.p`
  padding: 5px;
  color: ${(props) => props.theme.red};
  font-size: 14px;
`;

const SearchContainProfileId = styled.div`
  color: #767676;
  font-size: 12px;
`;

const SearchItem = styled.div`
  display: flex;
  padding: 10px 0;
`;
