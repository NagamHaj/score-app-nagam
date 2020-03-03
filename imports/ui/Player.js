import React from 'react';
import propTypes from "prop-types";

import {Student} from './../api/players';
export default class Player extends React.Component{
  render(){
    let classmodifier= `item item--position-${this.props.player.rank } `;

     return (
  <div key={this.props.player._id} className={classmodifier}>
  <div className="player">
  <div>
  <h3 className="player__name">{this.props.player.name}</h3>


  <p className="player__status">
 {this.props.player.position}  place_ {this.props.player.score} score(s)
    </p>

      </div>
    <div className="player__action">
     <button className="button button--round" onClick={() =>
        Student.update(this.props.player._id,{$inc: {score:1}})
      }> +1</button>
       <button  className="button button--round" onClick={() =>
          Student.update(this.props.player._id,{$inc: {score:-1}})
        }> -1</button>
     <button  className="button button--round" onClick={() =>
       Student.remove(this.props.player._id)
     }>X</button>
     </div>
   </div>
   </div>
);
}

}
Player.propTypes = {
  player: propTypes.object.isRequired
};
