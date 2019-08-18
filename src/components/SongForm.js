import React from "react";
import { connect } from "react-redux";
import Actions from "../actions/songs";

class SongForm extends React.Component {
  state = {
    name: "",
    artist: ""
  };

  handleOnChage = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { name, artist } = this.state;
    this.props.dispatch(addSong({ name, artist }));
    this.setState({
      name: "",
      artist: ""
    });
    event.preventDefault();
  };

  render() {
    const { name, artist } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="four columns">
            <input
              className="u-full-width"
              onChange={this.handleOnChage}
              placeholder="Nombre"
              value={name}
              name="name"
              type="text"
            />
          </div>
          <div className="four columns">
            <input
              className="u-full-width"
              onChange={this.handleOnChage}
              placeholder="Artista"
              value={artist}
              name="artist"
              type="text"
            />
          </div>
          <div className="four columns">
            <button type="submit">Enviar</button>
          </div>
        </div>
      </form>
    );
  }
}

const { addSong } = Actions;
export default connect()(SongForm);
