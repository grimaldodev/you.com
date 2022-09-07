import { useContext } from "react";
import { Col, Container, Navbar, NavbarBrand, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { ResultItem } from "../../components/ResultItem/ResultItem";
import { SearchBox } from "../../components/SearchBox/SearchBox";

import { ResultListContext } from "../../context/ResultsContext";
import { SearchContext } from "../../context/SearchContext";

export const Results = () => {
  const { query } = useContext(SearchContext);
  const { listResults } = useContext(ResultListContext);

  return query ? (
    <>
      <Navbar fixed="top" bg="light" variant="light">
        <Container>
          <NavbarBrand>Search engine</NavbarBrand>
          <Col xs="10" md="5">
            <SearchBox size="sm" />
          </Col>
        </Container>
      </Navbar>
      <Row className="align-content-center mt-4 mb-4">
        <Col xs="2">
          <h4></h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Results of : {query}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          {listResults.map((resultData, index) => {
            return <ResultItem key={index} cardInfo={resultData} />;
          })}
        </Col>
      </Row>
    </>
  ) : (
    <Navigate to="/" replace />
  );
};
