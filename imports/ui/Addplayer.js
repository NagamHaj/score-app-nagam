import React from 'react';

import {Student} from './../api/players';

export default class Addplayer extends React.Component{
 handlersubmit= (e) =>{
 e.preventDefault();
 let playername=e.target.playername.value;
 if (playername){
   e.target.playername.value='';
   Student.insert({
  name: playername ,
   score: 0


  });
}
};


  render(){ return(
<div className="item">

<form className="form" onSubmit={this.handlersubmit.bind(this)}>
<input className="form__input"  type="text" name="playername" placeholder="enter the name here"/>
<button className="button"> Add player </button>
</form>

</div> ); }}
