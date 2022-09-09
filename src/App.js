import { ConceptosBasicos } from "./components/ConceptosBasicos";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NewExercise from "./components/NewExercise";
import { BrowserRouter as Router } from "react-router-dom";

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
    </div>
  );
}

export default App;
