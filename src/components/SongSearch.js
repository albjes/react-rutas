import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import { Error404 } from "../pages/Error404";
import { Loader } from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import SongPage from "../pages/SongPage";
import SongTable from "./SongTable";
import { helpHttp } from "../helpers/helpHttp";

let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      //console.log(artistUrl, songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      //console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();

    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  const handleSaveSong = () => {
    let currentSong = {
      search,
      lyric,
      bio,
    };

    let songs = [...mySongs, currentSong];
    setMySongs(songs);
    setSearch(null);
    localStorage.setItem("mySongs", JSON.stringify(songs));
  };

  const handleDeleteSong = (id) => {
    //alert(`Eliminando canción con el id: ${id}`);
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar la canción con el id "${id}"`
    );

    if (isDelete) {
      let songs = mySongs.filter((el, index) => index !== id);
      setMySongs(songs);
      localStorage.setItem("mySongs", JSON.stringify(songs));
    }
  };

  return (
    <>
      <div className="lg:flex lg:justify-center">
        <Switch>
          <Route exact path="/">
            <SongForm
              handleSearch={handleSearch}
              handleSaveSong={handleSaveSong}
            />
            <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong} />
            {search && !loading && (
              <SongDetails bio={bio} lyric={lyric} search={search} />
            )}
          </Route>
          <Route exact path="/:id" children={<SongPage mySongs={mySongs} />} />
          <Route path="*" children={<Error404 />} />
        </Switch>
        <div className="lg:flex lg:justify-center">{loading && <Loader />}</div>
      </div>
    </>
  );
};

export default SongSearch;
