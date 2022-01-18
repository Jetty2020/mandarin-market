import React from 'react';
import PageTitle from '../components/common/PageTitle';
import UploadHeader from '../components/upload/UploadHeader';
import ProductPage from '../components/upload/ProductPage';

export default function Product() {
  return (
    <>
      <PageTitle title="Product" />
      <UploadHeader />
      <ProductPage />
    </>
  );
}
