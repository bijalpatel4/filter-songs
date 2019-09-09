/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from "react";
import "./App.css";
import Songs from "./components/songs";
import Input from "./components/Input";
import {
  getAllSongs,
  getSongById,
  deleteSongById
} from "./service/songsService";

class SongsApp extends Component {
  state = {
    songs: getAllSongs()
  };
  handlerByYear = event => {
    this.setState({
      songs: getAllSongs().filter(
        song =>
          song.language.startsWith(event.target.value) ||
          song.singer.startsWith(event.target.value)
      )
    });
  };
  handleDelete = song => {
    // console.log(getSongById(song.id));
    // const so = this.state.songs.filter(s => s.id !== song.id);
    // console.log(so);
    deleteSongById(song.id);
    this.setState({ songs: getAllSongs() });
  };
  render() {
    return (
      <div className="App">
        <h1
          className="display-1 deepshadow p-5"
          style={{ fontFamily: "cursive" }}
        >
          Type singer or language
        </h1>
        <Input clicked={this.handlerByYear} />
        <Songs songsList={this.state.songs} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default SongsApp;
