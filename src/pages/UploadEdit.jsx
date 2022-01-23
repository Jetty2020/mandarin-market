import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
import UploadHeader from '../components/upload/UploadHeader';
import EditPage from '../components/upload/EditPage';

export default function UploadEdit() {
  const { postid } = useParams();
  return (
    <>
      <PageTitle title="Edit" />
      <UploadHeader />
      <EditPage postid={postid} />
    </>
  );
}
