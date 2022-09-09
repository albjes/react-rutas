import React from "react";
import { useParams } from "react-router-dom";

export const Usuario = () => {
  let { username } = useParams();
  return (
    <>
      <div className="flex-row text-center">
        <div className="relative m-auto">Usuario</div>
        <div className="relative m-auto">
          Nombre de Usuario: <b>{username}</b>
        </div>
      </div>
    </>
  );
};
