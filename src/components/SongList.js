import React, { Component } from 'react';
// as import {Component} here then no need to write React.Component
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    // this.props === { songs: state.songs }

    return <div>SongList</div>;
  }
}

// always get first argument as state
const mapStateToProps = (state) => {
  console.log(state);

  return { songs: state.songs };
};

// connect is also a react component
export default connect(mapStateToProps)(SongList);
