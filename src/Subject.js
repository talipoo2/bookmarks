import React, { Component } from 'react';

export default class Subject extends Component {
	constructor(props) {
		super(props)
		// this.state = {isToggleOn : true};
		this.handleClick = this.handleClick.bind(this);

		this.state = {
			isClicked: false,
			name: 'Bananas'
		}
	}

	// event handlers
	clickSubject(e) {
	    // alert('OUCH!');
	    console.log('Subject Clicked');
      	e.currentTarget.style.backgroundColor = '#2F4F4F';
      	e.currentTarget.style.color = '#FFF';
  		//e.setAttribute("class", blue); //For Most Browsers
		// e.setAttribute("className", blue); //For IE; harmless to other browsers. 
	  }

	countMylinks(e) {
		// set.setState({mykey: 'this is bananas'});
	}

	handleClick() {
		this.setState(prevState => ({
			isClicked: !prevState.isClicked
		}));

		console.log(this.state.isClicked);

		setTimeout(() => {
			console.log(this.state.isClicked)
			console.log('------------------')
		}, 100)
	}  

	render() {
		return(
			<div>
				<h2 onClick={this.clickSubject.bind(this)}>{this.props.items.subject}</h2>
				<ul>
					{this.props.items.resources.map((resource) => { 
						return(								
								<a href="{resource.title}">{resource.title}</a>
						)} 
					)}
					
				</ul>
				<button onClick={this.handleClick}>I'm a Button!</button>
			</div>
		)
	}
}