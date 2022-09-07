import { Card } from "react-bootstrap";

export const ResultItem = ({ cardInfo }) => {
  const { title, url, summary } = cardInfo;
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{summary}</Card.Text>
        <Card.Link href={url}>Visit site</Card.Link>
      </Card.Body>
    </Card>
  );
};
