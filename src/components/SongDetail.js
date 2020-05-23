import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  console.log('SongDetail props', props);
  return <div>Song Detail</div>;
};

const mapStateToProps = (state) => {
  console.log('SongDetail state', state.selectedSong);

  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
