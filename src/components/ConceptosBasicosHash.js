import { Redirect, Route, Switch } from "react-router-dom";

import { Acerca } from "../pages/Acerca";
import { Contacto } from "../pages/Contacto";
import Dashboard from "../pages/Dashboard";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Productos from "../pages/Productos";
import React from "react";
import ReactTopics from "../pages/ReactTopics";
import { Usuario } from "../pages/Usuario";

export const ConceptosBasicosHash = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        {/*  <Route exact path="/dashboard" component={Dashboard} /> */}
        <Route path="/react" component={ReactTopics} />
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
