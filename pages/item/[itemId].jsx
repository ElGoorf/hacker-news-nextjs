import { fetchItem } from '../../api/hn';
import Comment from '../../components/Comment';
import { Divider } from '@material-ui/core';
import Link from 'next/link';
import Head from 'next/head';
import LayoutHeader from '../../components/Layout/Header';

export default function Item({ item }) {
  if (!item) {
    return 'error';
  }

  const {
    id,
    created_at,
    created_at_i,
    type, // "comment" or "story"
    author,
    title,
    url,
    text,
    points,
    parent_id,
    story_id,
    children,
    options,
  } = item;

  return (
    <div>
      <Head>
        <title>{title} - Hacker News API demo by Hussein Duvigneau</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutHeader />

      <header>
        {title}
        {url && (
          <>
            {' '}
            (
            <a href={url} target="_blank" rel="noreferrer" title="Will open in new window">{url}</a>
            )
          </>
        )}
      </header>
      {/* todo resolve dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <Divider />
      <section>
        {children.map((child) => (<Comment key={child.id} item={child} />))}
      </section>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const item = await fetchItem(ctx.query.itemId);

  return {
    props: {
      item,
    },
  };
}
