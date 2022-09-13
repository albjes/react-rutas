import { Message } from "./Message";
import React from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ bio, lyric, search }) => {
  if (!lyric || !bio) return null;

  return (
    <div className="w-full text-center mb-8 ">
      {console.log(bio)}
      <h2 className=" bg-slate-500 text-white text-lg p-1 mb-8">Resultados</h2>
      <div className="flex flex-wrap justify-center">
        {lyric.err || lyric.err || lyric.name === "AbortError" ? (
          <Message
            msg={`Error: no existe la canción '${search.song}'`}
            bgColor="text-red-800"
          />
        ) : (
          <SongLyric title={search.song} lyrics={lyric.lyrics} />
        )}
        {bio.artists ? (
          <SongArtist artist={bio.artists[0]} />
        ) : (
          <Message
            msg={`Error: no existe el artista '${search.artist}'`}
            bgColor="text-red-800"
          />
        )}
      </div>
    </div>
  );
};

export default SongDetails;
