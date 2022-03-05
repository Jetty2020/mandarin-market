import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PostDetailCard from '../components/profile/PostDetailCard';
import PageTitle from '../components/common/PageTitle';

function PostDetail() {
  const postParams = useParams().postid;

  return (
    <PostDetailWrapper>
      <PageTitle title="postDetail" />
      <PostDetailCard postid={postParams} />
    </PostDetailWrapper>
  );
}

export default PostDetail;

const PostDetailWrapper = styled.div`
  height: 100%;
  position: relative;
`;
