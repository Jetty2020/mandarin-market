import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProfileCard from '../components/profile/ProfileCard';
import SellingContainer from '../components/profile/SellingContainer';
import EditContainer from '../components/profile/EditContainer';
import Navbar from '../components/common/Navbar';
import PageTitle from '../components/common/PageTitle';

function Edit() {
  return (
    <div>
      <PageTitle title="edit" />
      <EditContainer />
    </div>
  );
}

export default Edit;
