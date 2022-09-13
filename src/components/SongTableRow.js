import { useHistory } from "react-router-dom";

const SongTableRow = ({ id, el, handleDeleteSong }) => {
  let { bio, search } = el;
  let avatar = bio.artists[0].strArtistThumb;
  let history = useHistory();
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="py-4 px-6">
        <img className="w-auto h-24" src={avatar} alt="" />
      </td>
      <td className="py-4 px-6">{search.artist}</td>
      <td className="py-4 px-6">{search.song}</td>
      <td className="py-4 px-6">
        <button
          onClick={() => history.push(`/${id}`)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Ver
        </button>
        <button
          onClick={() => handleDeleteSong(id)}
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default SongTableRow;
