import React from 'react';
import Player from './Player';
import propTypes from "prop-types";
import FlipMove from 'react-flip-move';

export default class Playerlist extends React.Component{


  renderPlayers () {
    if(this.props.players.length==0){
      return (<div className="item  item__message item__message--embty"><p>There are no players yet</p></div>);

    }
    else{
    return this.props.players.map((player) => {
      return <Player key= {player._id} player={player} />;
   } );
  }
}

render(){ return (

<FlipMove maintainContainerHeight={true}>
{this.renderPlayers()}
</FlipMove>
);}



};

Playerlist.propTypes={
players: propTypes.array.isRequired

};
