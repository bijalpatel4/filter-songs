import React from "react";

const Songs = props => {
  return (
    <table className="table table-light" style={{ fontSize: "20px" }}>
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Song</th>
          <th scope="col">Singer</th>
          <th scope="col">Movie Name</th>
          <th scope="col">Language</th>
          <th scope="col">year</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.songsList.map(song => (
          <tr key={song.id}>
            <th scope="row">{song.id}</th>
            <td>{song.song}</td>
            <td>{song.singer}</td>
            <td>{song.movieName}</td>
            <td>{song.language}</td>
            <td>{song.year}</td>
            <td>
              <button onClick={() => props.onDelete(song)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Songs;
