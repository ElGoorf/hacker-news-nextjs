import React from 'react';
import List from '@material-ui/core/List';
import { SearchContext } from '../../context/SearchContext';
import Hit from './Hit';

const Results = () => {
  const searchContextData = React.useContext(SearchContext);
  const { hits } = searchContextData.results;

  return (
    <List>
      {hits.map((hit) => <Hit key={hit.objectID} hit={hit} />)}
    </List>
  );
};

export default Results;
