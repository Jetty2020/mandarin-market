import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
import UploadHeader from '../components/upload/UploadHeader';
import ProductEditPage from '../components/upload/ProductEditPage';

export default function ProductEdit() {
  const { productid } = useParams();
  return (
    <>
      <PageTitle title="Product" />
      <UploadHeader />
      <ProductEditPage productid={productid} />
    </>
  );
}
