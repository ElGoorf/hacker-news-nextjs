import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import links from '../../../util/links';

const Secondary = ({
  id,
  createdAt,
  author,
  points,
  commentCount,
}) => {
  const href = links.item(id);

  const spans = [
    <Link href={href}>
      {`${points} points`}
    </Link>,
    <span>{author}</span>,
    <Link href={href}>
      {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
    </Link>,
    <Link href={href}>
      {`${commentCount} commentCount`}
    </Link>,
  ];

  return spans.reduce((prev, curr) => [prev, ' | ', curr]);
};

export default Secondary;
