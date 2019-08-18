import React from "react";
import { connect } from "react-redux";

const Detail = ({ selectedSong }) => {
  return (
    <div className="four columns u-full-width">
      {selectedSong && (
        <div>
          <h4>Song Detail</h4>
          <p>{selectedSong.name}</p>
          <p>{selectedSong.artist}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(mapStateToProps)(Detail);
