
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/App';
import {Student, Sortedlist} from './../imports/api/players';


Meteor.startup(() => {
   Tracker.autorun(() => {

     let title = "Score Keeper";
      let players = Student.find({}, {sort:{score: -1}}).fetch();
//Student.remove({name: 'jojo' });
   let sorted= Sortedlist(players);
ReactDOM.render(<App title= {title} players={sorted} />,document.getElementById('app'));

});
});
//Student.insert({
//name:'sam',
//score: '0'

//});



// wrong statement let partjsx= (x.map( (std) => <p key= {std.id}>{std.name} and the score is {std.score}</p>));


//const handlersubmit= (e) => {
//e.preventDefault();
//let playername=e.target.playername.value;
//if (playername){
  //e.target.playername.value='';
  //Student.insert({
  // name: playername ,
  // score: 0
 //});
//}
//};





//Tracker.autorun(function(){
//console.log('player list', Student.find().fetch());

//});
//setTimeout(function(){
  //console.log(Student.find().fetch());}
//  , 1000);


//const studentlist = [
//  {  id: '1',
  //  name: 'nagam',
  //  score:'14'

  // },

  // { id:'2',
  //   name:'nadia',
  //   score:'12'

  // }];



  // let partjsx=(function(stds){
  //  return stds.map(function(std){
  //  return  <p key= {std.id}>{std.name} and the score is {std.score}</p>
  //  });
   //});








//console.log('Log from /client/main.js');
//import {greetUser} from './../imports/utils';

//console.log(greetUser());
