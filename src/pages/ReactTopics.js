import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import React from "react";

const Topic = () => {
  let { topic } = useParams();
  return (
    <div>
      <h4 className="p-4">{topic}</h4>
    </div>
  );
};

const ReactTopics = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div className="flex-row text-center">
        <div className="relative m-auto">Temas de React</div>
        <div className="relative m-auto p-4">
          <ul>
            <li>
              <Link to={`${url}/jsx`}>JSX</Link>
            </li>
            <li>
              <Link to={`${url}/props`}>Props</Link>
            </li>
            <li>
              <Link to={`${url}/estado`}>Estado</Link>
            </li>
            <li>
              <Link to={`${url}/componentes`}>Componentes</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path={path}>
              <h4 className="p-4">Elige un tema de React</h4>
            </Route>
            <Route path={`${path}/:topic`} component={Topic} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default ReactTopics;
