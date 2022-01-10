import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function FeedCard(img = '') {
  const imgExist = 'img/post-img-example.png';
  // imgExist = img;
  return (
    <Contents>
      <GotoProfile to="/none">
        <LinkWrapper> </LinkWrapper>
      </GotoProfile>
      <FeedContents>
        <FeedMenu>
          <ImgMore src="img/icon/icon-more-vertical.png" alt="" />
        </FeedMenu>
        <FeedTitle>애월읍 위니브 감귤농장</FeedTitle>
        <FeedId>@chango.kr</FeedId>
        <FeedContent>
          오늘 하루는 일어나면서부터 그리고 잠자리에 들기까지 하루종일 힘이
          없었다. 무슨 이유에서인지는 알 수 없었다. 예전에는 왜 그럴까 무슨
          이유에서 이럴까 원인을 파악하고 해결하려는 직업병아닌 직업병이
          있었는데 세월이 흐르고 이런 시간들이 잦다보니 그냥 인생을 살다보면
          그런 날도 있기마련인가보다 생각한다. 그래서 이제는 그런 날을 마주할
          때면 내가 그동안 고생 많이했구나 하며 휴식을 취한다.
        </FeedContent>
        {imgExist !== '' ? <ImgPost src={imgExist} alt="" /> : null}
        <FeedIcon>
          <ImgHeart src="img/icon/icon-heart.png" alt="" />
          <NumOf>58</NumOf>
          <ImgMessage src="img/icon/icon-message-circle.svg" alt="" />
          <NumOf>12</NumOf>
        </FeedIcon>
        <FeedDate>2020년 10월 21일</FeedDate>
      </FeedContents>
    </Contents>
  );
}

export default FeedCard;

const Contents = styled.div`
  background-color: white;
  display: flex;
  padding: 16px 21px;
  justify-content: center;
`;

const LinkWrapper = styled.div`
  background-image: url('img/basic-profile-img.png');
  background-size: cover;
  width: 42px;
  height: 42px;
`;

const GotoProfile = styled(Link)`
  margin-right: 12px;
`;

const FeedContents = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 389px;
`;

const FeedTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
const FeedId = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #767676;
  margin-top: 2px;
  margin-bottom: 16px;
`;
const FeedContent = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const FeedIcon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14.73px;
  margin-bottom: 18.73px;
`;

const FeedDate = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: #767676;
`;

const ImgHeart = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

const ImgMessage = styled.img`
  width: 19.5px;
  height: 19.5px;
  margin-right: 6px;
`;

const NumOf = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #767676;
  margin-right: 16px;
`;

const FeedMenu = styled.div`
  position: absolute;
  top: 4px;
  right: 0px;
`;

const ImgMore = styled.img`
  width: 18px;
  height: 18px;
`;

const ImgPost = styled.img`
  min-width: 304px;
  max-width: 389px;
  min-height: 228px;
  max-height: 291px;
  border-radius: 10px;
  margin-top: 16px;
`;
