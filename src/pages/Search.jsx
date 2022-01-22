import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import SearchBar from '../components/search/SearchBar';
import SearchContainer from '../components/search/SearchContainer';
import PageTitle from '../components/common/PageTitle';

function Search() {
  const [searchDatas, setSearchDatas] = useState([]);
  return (
    <div>
      <PageTitle title="Search" />
      <div>
        <SearchBar setSearchDatas={setSearchDatas} />
        <SearchContainer datas={searchDatas} />
        <Navbar />
      </div>
    </div>
  );
}

export default Search;
