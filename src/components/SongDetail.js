import React from 'react';
import { connect } from 'react-redux';

// instead of keep writing like props.song -> destructure
// write { selectedSong }
// which we we care about
const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Select a song please</div>;
  }
  //   console.log('SongDetail props', props);
  return (
    <div>
      <h3>Details for:</h3>
      <br />
      <p>Title:{selectedSong.title}</p>
      <p>Duration:{selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('SongDetail state', state.selectedSong);

  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
