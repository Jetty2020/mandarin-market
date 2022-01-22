import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/common/Navbar';
import SearchBar from '../components/search/SearchBar';
import SearchContainer from '../components/search/SearchContainer';
import PageTitle from '../components/common/PageTitle';

function Search() {
  return (
    <div>
      <PageTitle title="Search" />
      <div>
        <SearchBar />
        <SearchContainer />
        <Navbar />
      </div>
    </div>
  );
}

export default Search;
