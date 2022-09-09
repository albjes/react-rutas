import { Redirect, Route, Switch } from "react-router-dom";

import { Acerca } from "../pages/Acerca";
import { Contacto } from "../pages/Contacto";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";
import Productos from "../pages/Productos";
import React from "react";
import { Usuario } from "../pages/Usuario";

export const ConceptosBasicos = () => {
  return (
    <>
      <Switch>
        <Route exact path="/about">
          <Redirect to="/acerca" />
        </Route>
        <Route exact path="/contact">
          <Redirect to="/contacto" />
        </Route>
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/usuario/:username" component={Usuario} />
        <Route exact path="/acerca" component={Acerca} />
        <Route exact path="/contacto" component={Contacto} />
        <Route exact path="/" component={Home}></Route>
        <Route path="*" component={Error404}></Route>
      </Switch>
    </>
  );
};

/* export const ConceptosBasicos = () => {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <h3>Home</h3>
            </Route>
            <Route exact path="/acerca" component={Acerca} />
            <Route exact path="/contacto" children={<Contacto />} />
          </Switch>
        </Router>
      </>
    );
  }; */
