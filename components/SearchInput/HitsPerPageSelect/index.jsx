import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { hitsPerPageOptions } from '../../../config';
import { SearchContext } from '../../../context/SearchContext';

const HitsPerPageSelect = () => {
  const searchContextData = React.useContext(SearchContext);

  return (
    <span>
      Results per page:{' '}
      <Select
        label="Results per page"
        defaultValue={hitsPerPageOptions[0]}
        value={searchContextData.hitsPerPage}
        onChange={searchContextData.updateHitsPerPage}
      >
        {hitsPerPageOptions.map((opt) => (
          <MenuItem key={opt} value={opt}>{opt}</MenuItem>
        ))}
      </Select>
    </span>
  );
};

export default HitsPerPageSelect;
