import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

export default function ProductPage() {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
  });
  const noString = (event) => {
    const { value } = event.target;
    return value.replace(/[^0-9]/g, '');
  };
  const addComma = (event) => {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    const { value } = event.target;
    return value.toString().replace(regexp, ',');
  };
  const addProduct = async (data) => {
    // console.log(data);
    const str = await getValues('price');
    setValue('price', parseInt(str.replace(/[^0-9]/g, ''), 10));
    const priceNum = getValues('price');
    // console.log(priceNum);
    // console.log(typeof priceNum);
  };

  return (
    <ProductContainer>
      <form onSubmit={handleSubmit(addProduct)}>
        <InputWrapper>
          <Label htmlFor="productName">상품명</Label>
          <Input
            type="text"
            spellCheck="false"
            autoComplete="off"
            placeholder="2-10자 이내여야 합니다."
            {...register('productName', {
              required: true,
              minLength: 2,
              maxLength: 10,
            })}
          />
          {errors.productName && errors.productName.type === 'minLength' && (
            <Error>* 최소 2자 이상이어야 합니다.</Error>
          )}
          {errors.productName && errors.productName.type === 'maxLength' && (
            <Error>* 최대 10자 이하여야 합니다.</Error>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="price">가격</Label>
          <Input
            type="text"
            spellCheck="false"
            autoComplete="off"
            placeholder="숫자만 입력 가능합니다."
            {...register('price', {
              required: true,
              onChange: (e) => {
                setValue('price', noString(e));
              },
              onBlur: (e) => {
                setValue('price', addComma(e));
              },
            })}
          />
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

const ProductContainer = styled.main`
  padding: 30px 34px;
  margin-top: 48px;
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

const InputWrapper = styled.div`
  margin-top: 16px;
  border: 1px solid #eee;
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
