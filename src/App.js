import { HashRouter, BrowserRouter as Router } from "react-router-dom";

import { ConceptosBasicos } from "./components/ConceptosBasicos";
import CrudApi from "./components/CrudApi";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NavCrud from "./components/NavCrud";
import NavSong from "./components/NavSong";
import NewExercise from "./components/NewExercise";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div>
      <HashRouter>
        <Nav />
        <Header />
        <NewExercise msg="Conceptos Básicos">
          <ConceptosBasicos />
        </NewExercise>
      </HashRouter>
      <HashRouter basename="estrellas">
        <NavCrud />
        <NewExercise msg="Crud Api con rutas">
          <CrudApi />
        </NewExercise>
      </HashRouter>
      <HashRouter basename="canciones">
        <NavSong />
        <NewExercise msg="Songs Search">
          <SongSearch />
        </NewExercise>
      </HashRouter>
    </div>
  );
}

export default App;
