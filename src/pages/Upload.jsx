import React from 'react';
import PageTitle from '../components/common/PageTitle';
import UploadHeader from '../components/upload/UploadHeader';
import UploadPage from '../components/upload/UploadPage';

export default function Upload() {
  return (
    <>
      <PageTitle title="Upload" />
      <UploadHeader />
      <UploadPage />
    </>
  );
}
