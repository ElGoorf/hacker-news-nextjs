import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { SearchContext } from '../../../context/SearchContext';

const CustomPagination = () => {
  const searchContextData = React.useContext(SearchContext);

  return (
    <Pagination
      count={searchContextData.results.nbPages}
      page={searchContextData.page}
      onChange={searchContextData.updatePageNumber}
    />
  );
};

export default CustomPagination;
