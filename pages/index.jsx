import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { SearchContextProvider } from '../context/SearchContext';
import SearchTextField from '../components/SearchInput/TextField';
import HitsPerPageSelect from '../components/SearchInput/HitsPerPageSelect';
import Results from '../components/SearchResults';
import CustomPagination from '../components/SearchInput/Pagination';
import { fetchSearchResults } from '../api/hn';
import LayoutHeader from '../components/Layout/Header';

export default function Home({ initialQuery, initialResults }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hacker News API demo by Hussein Duvigneau</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutHeader />

      <main className={styles.main}>
        <SearchContextProvider initialQuery={initialQuery} initialResults={initialResults}>
          <div className={styles.search}>
            <SearchTextField />
            <br />
            <HitsPerPageSelect />
          </div>
          <Results />
          <div className={styles.search}>
            <CustomPagination />
          </div>
        </SearchContextProvider>
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { query: initialQuery } = ctx;

  const { query, page, hitsPerPage } = initialQuery;
  const initialResults = await fetchSearchResults(query, page, hitsPerPage);

  return {
    props: {
      initialQuery,
      initialResults,
    },
  };
}
