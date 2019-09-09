import songs from "../data/songsData";

var sg = songs;

export function getAllSongs() {
  return sg;
}

export function getSongById(songId) {
  const song = sg.find(s => s.id === songId);
  return song;
}

export function deleteSongById(songId) {
  const newSongArr = sg.filter(s => s.id !== songId);
  sg = newSongArr;
}
