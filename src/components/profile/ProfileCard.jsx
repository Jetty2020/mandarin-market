import React, { useState } from 'react';
import styled from '@emotion/styled';

function ProfileCard() {
  const [followers, setFollowers] = useState();
  const [followings, setFollowings] = useState();
  return (
    <section>
      <Header>
        <SrOnlyHeader />
      </Header>
      <Name />
      <Id />
      <Info />
      <Action />
    </section>
  );
}

export default ProfileCard;

const SrOnlyHeader = styled.h4`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
  clip: rect(0, 0, 0, 0);
`;

const Header = styled.div``;

const Name = styled.p``;

const Id = styled.p``;

const Info = styled.p``;

const Action = styled.p``;
