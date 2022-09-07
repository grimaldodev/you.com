import { useContext, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import config from "../../config/index";
import { ResultListContext } from "../../context/ResultsContext";
import { SearchContext } from "../../context/SearchContext";
import service from "../../services/service";

export const SearchBox = ({ size }) => {
  const [inputValue, setInputValue] = useState(null);
  const { setQuery } = useContext(SearchContext);
  const { setListResults } = useContext(ResultListContext);
  const navigate = useNavigate();
  const location = useLocation();
  const sendSearch = async (route, searchQuery) => {
    const wikipediaConfig = config.services.wikipedia;
    wikipediaConfig.parameters.search = searchQuery;
    const wikipediaResults = await service(wikipediaConfig);
    const stackoverflowConfig = config.services.stackoverflow;
    stackoverflowConfig.parameters.intitle = searchQuery;
    const stackoverflowResults = await service(stackoverflowConfig);

    setQuery(searchQuery);
    setListResults(
      [].concat(
        stackoverflowResults.serviceResponse,
        wikipediaResults.serviceResponse
      )
    );

    if (route !== "/results") {
      navigate("results");
    }
  };
  return (
    <>
      <InputGroup size={size}>
        <FormControl
          placeholder="Looking for something?"
          onKeyUp={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <Button
          variant="primary"
          onClick={() => {
            sendSearch(location.pathname, inputValue);
          }}
        >
          Search
        </Button>
      </InputGroup>
    </>
  );
};
