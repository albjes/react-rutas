import { useHistory, useLocation } from "react-router-dom";

import React from "react";

const Productos = () => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);

  const LIMIT = 10;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;

  let history = useHistory();

  const handlePrev = (e) => {
    history.push({ search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}` });
  };

  const handleNext = (e) => {
    history.push({ search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}` });
  };
  return (
    <>
      <div className="flex-row text-center">
        <div className="relative m-auto">Productos</div>
        <div className="relative m-auto">
          Mostrando productos del <b>{start}</b> al <b>{end}</b>.
        </div>
        <div className="flex-col text-center p-8">
          {start > LIMIT && (
            <button
              onClick={handlePrev}
              className="mr-8 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Atrás
            </button>
          )}
          <button
            onClick={handleNext}
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Adelante
          </button>
        </div>
      </div>
    </>
  );
};

export default Productos;
