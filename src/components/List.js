import React from "react";
import { connect } from "react-redux";
import Actions from "../actions/songs";

class List extends React.Component {
  state = {};
  handleRemove = name => {
    this.props.deleteSong(name);
  };

  handleDetail = song => {
    this.props.selectedSong(song);
  };

  render() {
    const { songs } = this.props;

    return (
      <div className="six columns">
        {songs.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {songs.map(song => (
                <tr key={song.name}>
                  <td>{song.name}</td>
                  <td>
                    <button onClick={() => this.handleRemove(song.name)}>
                      BORRAR
                    </button>
                  </td>
                  <td>
                    <button
                      className="button-primary"
                      onClick={() => this.handleDetail(song)}
                    >
                      DETAIL
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <ul />
      </div>
    );
  }
}

const { deleteSong, selectedSong } = Actions;

const mapStateToProps = ({ songs }) => {
  return {
    songs
  };
};

export default connect(
  mapStateToProps,
  {
    deleteSong,
    selectedSong
  }
)(List);
