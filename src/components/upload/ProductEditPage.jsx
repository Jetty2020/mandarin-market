import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SERVER_BASE_URL } from '../../constants';

export default function ProductEditPage({ productid }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
  });

  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  const noString = (event) => {
    const { value } = event.target;
    return value.replace(/[^0-9]/g, '');
  };
  const toString = (value) => value.toString().replace(regexp, ',');
  const addComma = (event) => {
    const { value } = event.target;
    return value.toString().replace(regexp, ',');
  };

  const [productImgUrl, setProductImgUrl] = useState('');
  const getProduct = async () => {
    const productData = await (
      await axios.get(`${SERVER_BASE_URL}/product/detail/${productid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
    ).data;
    setValue('productName', productData.product.itemName);
    setValue('productPrice', toString(productData.product.price));
    setValue('productUrl', productData.product.link);
    setProductImgUrl(productData.product.itemImage);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const imageUpload = async (files) => {
    const formData = new FormData();
    formData.append('image', files[0]);
    const uploadedImg = await (
      await axios.post(`${SERVER_BASE_URL}/image/uploadfile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
    ).data;
    const imgName = uploadedImg.filename;
    setProductImgUrl(`${SERVER_BASE_URL}/${imgName}`);
  };
  const addImage = (event) => {
    const files = [...event.target.files];
    imageUpload(files);
  };

  const addProduct = async (data) => {
    const str = await getValues('productPrice');
    setValue('productPrice', parseInt(str.replace(/[^0-9]/g, ''), 10));
    const itemName = data.productName;
    const price = getValues('productPrice');
    const link = data.productUrl;
    const itemImage = productImgUrl;
    const uploadProduct = async () => {
      const productData = {
        product: { itemName, price, link, itemImage },
      };
      await axios.put(`${SERVER_BASE_URL}/product/${productid}`, productData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      navigate('/profile');
    };
    uploadProduct();
  };

  return (
    <ProductContainer>
      <form onSubmit={handleSubmit(addProduct)}>
        <ImgInputWrapper>
          <ImgTitle htmlFor="productImg">이미지 등록</ImgTitle>
          <ImgLabel>
            {productImgUrl && <img src={productImgUrl} alt="" />}
            <input
              type="file"
              accept="image/*"
              {...register('productImg', {
                required: true,
                onChange: (e) => {
                  setValue('productImg', addImage(e));
                },
              })}
            />
          </ImgLabel>
        </ImgInputWrapper>
        <InputWrapper>
          <Label htmlFor="productName">상품명</Label>
          <Input
            type="text"
            spellCheck="false"
            autoComplete="off"
            placeholder="2-15자 이내여야 합니다."
            {...register('productName', {
              required: true,
              minLength: 2,
              maxLength: 15,
            })}
          />
          {errors.productName && errors.productName.type === 'minLength' && (
            <Error>* 최소 2자 이상이어야 합니다.</Error>
          )}
          {errors.productName && errors.productName.type === 'maxLength' && (
            <Error>* 최대 15자 이하여야 합니다.</Error>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="productPrice">가격</Label>
          <Input
            type="text"
            spellCheck="false"
            autoComplete="off"
            placeholder="숫자만 입력 가능합니다."
            {...register('productPrice', {
              required: true,
              onChange: (e) => {
                setValue('productPrice', noString(e));
              },
              onBlur: (e) => {
                setValue('productPrice', addComma(e));
              },
            })}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="productUrl">판매 링크</Label>
          <Input
            type="url"
            spellCheck="false"
            autoComplete="off"
            placeholder="URL을 입력해 주세요."
            {...register('productUrl', {
              required: true,
              pattern:
                /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
            })}
          />
          {errors.productUrl && errors.productUrl.type === 'pattern' && (
            <Error>* URL을 입력해 주세요.</Error>
          )}
        </InputWrapper>
        <UploadBtn
          type="submit"
          disabled={!isValid}
          color={isValid ? '#F26E22' : '#FFC7A7'}
        >
          저장
        </UploadBtn>
      </form>
    </ProductContainer>
  );
}

ProductEditPage.propTypes = {
  productid: PropTypes.string.isRequired,
};

const ProductContainer = styled.main`
  height: 100vh;
  padding: 30px 34px;
  margin-top: 48px;
  background-color: #fff;
`;

const UploadBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 16px;
  width: 90px;
  height: 32px;
  border: none;
  border-radius: 32px;
  background: ${(props) => props.color};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.4s ease;
  z-index: 150;
  cursor: ${(props) => (props.disabled === true ? 'default' : 'pointer')};
`;

const ImgInputWrapper = styled.div`
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  margin-top: 16px;
`;

const ImgLabel = styled.label`
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 204px;
  border: 1px solid rgba(219, 219, 219, 0.5);
  border-radius: 10px;
  background: #f2f2f2;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 12px;
    bottom: 12px;
    width: 36px;
    height: 36px;
    background: url(img/img-button.png);
  }
  & input[type='file'] {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }
`;

const ImgTitle = styled.p`
  display: block;
  margin-bottom: 18px;
  color: ${(props) => props.theme.gray};
  font-size: 12px;
  font-weight: 500;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: ${(props) => props.theme.gray};
  font-size: 12px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  height: 23px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  line-height: 14px;
  transition: all 0.4s ease;
  :focus {
    border-bottom: 1px solid ${(props) => props.theme.accent};
  }
  ::placeholder {
    color: #dbdbdb;
    font-size: 14px;
  }
`;

const Error = styled.p`
  margin-top: 6px;
  color: #eb5757;
  font-size: 12px;
`;
