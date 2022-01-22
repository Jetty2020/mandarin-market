import React from 'react';
import styled from 'styled-components';

export default function SearchBar() {
  return (
    <SearchContainer>
      <SearchContainer1>
        <SearchContainerPicture
          src="img/basic-profile-img.png"
          alt="프로필 사진"
        />
        <SearchContainerProfile>
          <SearchContainProfileNickName>애월읍</SearchContainProfileNickName>
          <SearchContainProfileId> @ weniv_Mandarin</SearchContainProfileId>
        </SearchContainerProfile>
      </SearchContainer1>

      <SearchContainer2>
        <SearchContainerPicture
          src="img/basic-profile-img.png"
          alt="프로필 사진"
        />
        <SearchContainerProfile>
          <SearchContainProfileNickName>애월읍</SearchContainProfileNickName>
          <SearchContainProfileId> @ weniv_Mandarin</SearchContainProfileId>
        </SearchContainerProfile>
      </SearchContainer2>

      <SearchContainer3>
        <SearchContainerPicture
          src="img/basic-profile-img.png"
          alt="프로필 사진"
        />
        <SearchContainerProfile>
          <SearchContainProfileNickName>애월읍</SearchContainProfileNickName>
          <SearchContainProfileId> @ weniv_Mandarin</SearchContainProfileId>
        </SearchContainerProfile>
      </SearchContainer3>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  padding: 20px;
  margin-top: 60px;
`;

const SearchContainerPicture = styled.img`
  flex-direction: column;
  width: 50px;
`;

const SearchContainerProfile = styled.p`
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

const SearchContainer1 = styled.div`
  display: flex;
`;

const SearchContainer2 = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const SearchContainer3 = styled.div`
  display: flex;
`;
