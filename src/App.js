import { HashRouter, BrowserRouter as Router } from "react-router-dom";

import { ConceptosBasicos } from "./components/ConceptosBasicos";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NewExercise from "./components/NewExercise";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Header />
        <NewExercise msg="Conceptos Básicos">
          <ConceptosBasicos />
        </NewExercise>
      </Router>
      <HashRouter>
        <NewExercise msg="Conceptos Básicos HASH">
          <ConceptosBasicos />
        </NewExercise>
        <Nav />
      </HashRouter>
    </div>
  );
}

export default App;
