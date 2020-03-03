
import React from 'react';

import propTypes from "prop-types";

export default class Titlebar extends React.Component{

  rendersubtitle(){
 if(this.props.subtitle){

return<h2  className="title-bar__subtitle">{this.props.subtitle}</h2> ;

 }

  }
render(){
return (
<div className="title-bar">
<div className="wrapper">
<h1>{this.props.title} </h1>
{this.rendersubtitle()}
</div>
</div>

);
}
}

Titlebar.propTypes = {
title: propTypes.string.isRequired,
subtitle: propTypes.string

};
Titlebar.defaultProps = {
//title:"default title"

};
