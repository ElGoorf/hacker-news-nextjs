import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Primary from './Primary';
import Secondary from './Secondary';

const Index = ({ hit }) => {
  const {
    created_at,
    title,
    url,
    author,
    points,
    story_text,
    comment_text,
    num_comments,
    story_id,
    story_title,
    story_url,
    parent_id,
    created_at_i,
    relevancy_score,
    _tags,
    objectID,
    _highlightResult,
  } = hit;

  const primary = (
    <Primary
      title={title}
      url={url}
      id={objectID}
    />
  );

  const secondary = (
    <Secondary
      id={objectID}
      createdAt={created_at}
      author={author}
      points={points}
      commentCount={num_comments}
    />
  );

  return (
    <ListItem>
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  );
};

export default Index;
