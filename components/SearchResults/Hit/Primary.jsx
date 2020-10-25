import Link from 'next/link';
import links from '../../../util/links';

const Primary = ({ title, url, id }) => (
  <div>
    <Link href={links.item(id)}>{title}</Link>
    {url && (
    <>
      {' '}
      (
      <a href={url} target="_blank" rel="noreferrer" title="Will open in new window">{url}</a>
      )
    </>
    )}
  </div>
);

export default Primary;
