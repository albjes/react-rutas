import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch, handleSaveSong }) => {
  const [form, setForm] = useState(initialForm);
  const [isDisabled, setIsDisabled] = useState(true);

  let classButtonDisabled =
    "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed";
  let classButtonEnable =
    "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos incompletos");
      setIsDisabled(true);
      return;
    }

    handleSearch(form);
    setForm(initialForm);
    setIsDisabled(false);
  };

  return (
    <div className="p-8">
      <h3 className="text-center mb-8 text-xl">Busca tu canción</h3>
      <form
        className="w-full max-w-lg text-center m-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Artista
            </label>
            <input
              onChange={handleChange}
              value={form.artist}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="artist"
              placeholder="Jane"
              //value={form.artist}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Canción
            </label>
            <input
              onChange={handleChange}
              value={form.song}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-last-name"
              type="text"
              name="song"
              placeholder="Canción"
              //value={form.song}
            />
          </div>
        </div>
        <div className="m-auto">
          <input
            className="mr-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
            value="Enviar"
          />
          <input
            className={isDisabled ? classButtonDisabled : classButtonEnable}
            type="button"
            value="Agregar Canción"
            disabled={isDisabled && "disabled"}
            onClick={handleSaveSong}
          />
        </div>
      </form>
    </div>
  );
};

export default SongForm;
