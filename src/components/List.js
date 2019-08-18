import React from "react";
import { connect } from "react-redux";
import Actions from "../actions/songs";

class List extends React.Component {
  state = {};
  handleRemove = name => {
    this.props.dispatch(deleteSong(name));
  };

  render() {
    const { songs } = this.props;

    return (
      <div>
        <table className="u-full-width">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Artista</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {songs.map(song => (
              <tr key={song.name}>
                <td>{song.name}</td>
                <td>{song.artist}</td>
                <td>
                  <button onClick={() => this.handleRemove(song.name)}>
                    BORRAR
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ul />
      </div>
    );
  }
}

const { deleteSong } = Actions;

const mapStateToProps = ({ songs }) => {
  return {
    songs
  };
};

export default connect(mapStateToProps)(List);
