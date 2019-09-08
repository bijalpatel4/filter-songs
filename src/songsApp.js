/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./App.css";
import Songs from "./components/songs";
import Input from "./components/Input";

const SongsApp = props => {
  const songs = [
    {
      id: 1,
      song: "Manwa Laage",
      singer: "shreya ghoshal",
      movieName: "Happy New Year",
      language: "hindi",
      year: 2014
    },
    {
      id: 2,
      song: "Tu hi na jaane",
      singer: "sonu nigam",
      movieName: "Azhar",
      language: "hindi",
      year: 2016
    },
    {
      id: 3,
      song: "Kamli",
      singer: "sunidhi chauhan",
      movieName: "Dhoom3",
      language: "hindi",
      year: 2013
    },
    {
      id: 4,
      song: "Save the day",
      singer: "selena gomez",
      movieName: "Album",
      language: "english",
      year: 2013
    },
    {
      id: 5,
      song: "Blank Space",
      singer: "taylor swift",
      movieName: "Album",
      language: "english",
      year: 2014
    },
    {
      id: 6,
      song: "Wrecking Ball",
      singer: "miley cyrus",
      movieName: "Album",
      language: "english",
      year: 2013
    },
    {
      id: 7,
      song: "The Heart want what it wants",
      singer: "selena gomez",
      movieName: "Album",
      language: "english",
      year: 2014
    },
    {
      id: 8,
      song: "Sunn Raha Hai",
      singer: "shreya ghoshal",
      movieName: "Aashiqui 2",
      language: "hindi",
      year: 2013
    },
    {
      id: 9,
      song: "Desi Girl",
      singer: "sunidhi chauhan",
      movieName: "Dostana",
      language: "hindi",
      year: 2008
    },
    {
      id: 10,
      song: "Ve Maahi",
      singer: "arijit singh",
      movieName: "Kesari",
      language: "hindi",
      year: 2019
    },
    {
      id: 11,
      song: "Gerua",
      singer: "arijit singh",
      movieName: "Dilwale",
      language: "hindi",
      year: 2015
    }
  ];
  const [songState, setSongState] = useState({
    songs: songs
  });
  const handlerByYear = event => {
    setSongState({
      songs: songs.filter(
        song =>
          song.language.startsWith(event.target.value) ||
          song.singer.startsWith(event.target.value)
      )
    });
    console.log(event.target.value);
    console.log("event", songState.movies);
  };

  return (
    <div className="App">
      <h1
        className="display-1 deepshadow p-5"
        style={{ fontFamily: "cursive" }}
      >
        Type singer or language
      </h1>
      <Input clicked={handlerByYear} />
      <Songs songsList={songState} />
    </div>
  );
};

export default SongsApp;
