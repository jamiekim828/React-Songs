import React, { Component } from 'react';
// as import {Component} here then no need to write React.Component
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              onClick={() => this.props.selectSong(song)}
              className='ui button primary'
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // this.props === { songs: state.songs }
    console.log('this.props', this.props);

    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

// always get first argument as state
const mapStateToProps = (state) => {
  console.log(state);

  return { songs: state.songs };
};

// connect is also a react component
export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);
