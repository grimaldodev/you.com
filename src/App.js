import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ResultsProvider } from "./context/ResultsContext";
import { Home } from "./layouts/Home/Home";
import { Results } from "./layouts/Results/Results";

function App() {
  return (
    <ResultsProvider>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/results" element={<Results />} />
        </Routes>
      </Container>
    </ResultsProvider>
  );
}

export default App;
