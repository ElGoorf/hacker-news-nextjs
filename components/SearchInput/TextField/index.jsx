import React from 'react';
import TextField from '@material-ui/core/TextField';
import { SearchContext } from '../../../context/SearchContext';

const SearchTextField = () => {
  const searchContextData = React.useContext(SearchContext);
  return (
    <TextField
      type="search"
      label="Search"
      defaultValue={searchContextData.query}
      onChange={searchContextData.updateQuery}
    />
  );
};

export default SearchTextField;
