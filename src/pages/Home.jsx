import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/common/Navbar';
import PageTitle from '../components/common/PageTitle';
import HomeHeader from '../components/header/HomeHeader';
import { SERVER_BASE_URL } from '../constants';
import FeedCard from '../components/profile/FeedCard';

function Home() {
  const navigate = useNavigate();
  const [haveFollowing, setHaveFollowing] = useState(true);
  const [followingFeedList, setFollowingFeedList] = useState([]);

  async function getFollowerFeed() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await fetch(`${url}/post/feed`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());

    response.posts.forEach((ele) => {
      setFollowingFeedList((current) => [...current, ele]);
    });
  }

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      navigate('/login');
    }
    getFollowerFeed();
  }, []);

  return (
    <>
      <HomeHeader />
      {haveFollowing ? (
        <FeedWrapper>
          {followingFeedList.map((feed) => (
            <FeedCard
              key={`${feed.id}`}
              authorImage={feed.author.image}
              userName={feed.author.username}
              accountName={feed.author.accountname}
              content={feed.content}
              contentimage={feed.image !== undefined ? feed.image : ''}
              heartCount={feed.heartCount}
              comment={feed.comments}
              createdAt={feed.createdAt}
              postid={feed.id}
              hearted={feed.hearted}
            />
          ))}
          <Navbar />
        </FeedWrapper>
      ) : (
        <div>
          <PageTitle title="Home" />
          <Container>
            <HomeImg src="/img/symbol-logo-gray.png" alt="로고" />
            <HomeP>유저를 검색해 팔로우를 해보세요!</HomeP>
            <HomeBtn to="/search">검색하기</HomeBtn>
          </Container>
          <Navbar />
        </div>
      )}
    </>
  );
}

export default Home;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 140px);
  margin: 70px 0;
  background: #fff;
`;
const HomeImg = styled.img``;
const HomeP = styled.p`
  margin: 10px 0;
  color: #767676;
  padding: 10px;
  font-family: Spoqa Han Sans Neo;
`;
const HomeBtn = styled(Link)`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: ${(props) => props.theme.accent};
  color: #fff;
`;

const FeedWrapper = styled.div`
  padding-bottom: 59px;
`;
