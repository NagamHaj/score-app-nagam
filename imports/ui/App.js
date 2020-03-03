import React from 'react';
import Titlebar from './Titlebar';
import  Playerlist from './Playerlist';
import  Addplayer from './Addplayer';
import propTypes from "prop-types";


export default class App extends React.Component{

render(){

  return (
    <div>
    <Titlebar title={this.props.title} subtitle="new subtitle" />
    <div className="wrapper">
  <Playerlist players={this.props.players}/>
  <Addplayer/>
  </div>
  </div>
);
}

}

App.propTypes={
title: propTypes.string.isRequired,
players: propTypes.array.isRequired

};
