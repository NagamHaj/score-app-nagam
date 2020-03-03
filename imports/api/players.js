
import {Mongo} from 'meteor/mongo';

import numeral from "numeral";



export const Student=new Mongo.Collection('studentlist');
export const Sortedlist= (Student) => {
  let rank=1;
  return Student.map((player, index) => {

        if (index !== 0 && Student[index - 1].score > player.score) {
          rank++;
        }

        return {
          ...player,
          rank,
          position: numeral(rank).format('0o')
        };
      });
  };
