import { Col, Row } from "react-bootstrap";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Row className="justify-content-center align-content-center full-page">
        <h1 className="text-center mb-4 text-secondary">Search engine</h1>
        <Col xs="12" md="5">
          <SearchBox size="lg" />
        </Col>
      </Row>
    </>
  );
};
