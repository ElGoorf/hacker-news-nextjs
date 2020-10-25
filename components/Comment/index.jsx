import React from 'react';
import Button from '@material-ui/core/Button';
import {formatRelative} from 'date-fns';

const now = new Date();

const Comment = ({ item }) => {
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

  const [expanded, setExpanded] = React.useState(true);

  const commentHeader = <span>{author} on {formatRelative(new Date(created_at), now)}</span>;

  const expandedCopy = expanded
    ? '[-]'
    : `[${children.length + 1} more]`;

  return (
    <div>
      <div>
        {commentHeader}
        <Button
          onClick={() => setExpanded(!expanded)}
        >
          {expandedCopy}
        </Button>
      </div>
      <div>
        {expanded
          ? (
            <div>
              <div dangerouslySetInnerHTML={{ __html: text }} />
              <div style={{ marginLeft: '40px' }}>
                {children.map((child) => (<Comment key={child.id} item={child} />))}
              </div>
            </div>
          )
          : <div />}
      </div>
    </div>
  );
};

export default Comment;
