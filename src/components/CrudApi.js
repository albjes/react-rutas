import { HashRouter, Route, Router, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";

import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { Error404 } from "../pages/Error404";
import { Loader } from "./Loader";
import { Message } from "./Message";
import { helpHttp } from "../helpers/helpHttp";

export const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let endpoint = `${url}/${id}`;
    let options = {
      headers: { "content-type": "application/json" },
    };

    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          {loading && <Loader />}
          {error && (
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor="text-red-800"
            />
          )}
          {db && (
            <CrudTable
              data={db}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
            />
          )}
        </Route>
        <Route exact path="/agregar">
          <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        </Route>
        <Route exact path="/editar/:id">
          <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        </Route>
        <Route path="*" children={<Error404 />} />
      </Switch>
    </>
  );
};

export default CrudApi;
