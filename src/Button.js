import React, { Component } from 'react';

export default class Button extends Component {
	constructor(props) {
		super(props)
	}

	// event handlers
	  handleClick(e) {
	    alert('OUCH!');
	  }
	
	render() {
		return(
			<div>
				<a href="#" onClick={this.handleClick}>
		          Click me
		        </a>
		        <button>This is button</button>
	        </div>
		)
	}
}