import React from "react";
import SongTableRow from "./SongTableRow";

const SongTable = ({ mySongs, handleDeleteSong }) => {
  return (
    <div className="p-8">
      <h3 className="text-center mb-8 text-xl">Tabla de Canciones Favoritas</h3>
      <table className="m-auto text-center table-auto w-auto text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" colSpan="2" className="py-3 px-6 col-span-2">
              Artista
            </th>
            <th scope="col" className="py-3 px-6">
              Canción
            </th>
            <th scope="col" className="py-3 px-6">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((el, index) => (
              <SongTableRow
                key={index}
                el={el}
                id={index}
                handleDeleteSong={handleDeleteSong}
              />
            ))
          ) : (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="py-4 px-6 col-span-4 text-center">
                Sin Canciones Favoritas
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SongTable;
