import React from 'react';
import { withRouter } from 'next/router';
import qs from 'qs';
import { defaultSearchContext } from '../config';
import { fetchSearchResults } from '../api/hn';

export const SearchContext = React.createContext(defaultSearchContext);

class DumbSearchContextProvider extends React.Component {
  constructor(props) {
    super(props);

    const { initialQuery, initialResults} = props;

    this.state = {
      ...defaultSearchContext,
      ...initialQuery,
      results: { hits: [], ...initialResults },
    };
  }

  doSearch = () => {
    const {
      query,
      hitsPerPage,
      page,
    } = this.state;

    fetchSearchResults(query, page, hitsPerPage).then((results) => {
      this.setState({ results });
    });
  }

  updateUrl = () => {
    const {
      query,
      hitsPerPage,
      page,
    } = this.state;
    const { router } = this.props;

    router.push(`?${qs.stringify({ query, hitsPerPage, page })}`);
  }

  updateSearchParams = (params) => {
    this.setState(params, () => { this.doSearch(); this.updateUrl(); });
  }

  updateQuery = (query) => {
    this.updateSearchParams({ query });
  }

  updateHitsPerPage = (hitsPerPage) => {
    this.updateSearchParams({ hitsPerPage });
  }

  updatePageNumber = (page) => {
    this.updateSearchParams({ page });
  }

  render() {
    const {
      query,
      hitsPerPage,
      page,
      results,
    } = this.state;
    const { children } = this.props;

    return (
      <SearchContext.Provider
        value={{
          query,
          hitsPerPage,
          page,
          results,
          updateQuery: (e) => this.updateQuery(e.target.value),
          updateHitsPerPage: (e) => this.updateHitsPerPage(e.target.value),
          updatePageNumber: (e, p) => this.updatePageNumber(p),
        }}
      >
        {children}
      </SearchContext.Provider>
    );
  }
}

export const SearchContextProvider = withRouter(DumbSearchContextProvider);

export const withSearchContext = (Component) => (props) => (
  <SearchContext.Consumer>
    {(values) => (
      <Component {...props} {...values} />
    )}
  </SearchContext.Consumer>
);
