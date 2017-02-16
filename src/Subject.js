import React, { Component } from 'react';

export default class Subject extends Component {
	constructor(props) {
		super(props)
		// this.state = {isToggleOn : true};
		this.handleClick = this.handleClick.bind(this);

		this.state = {
			isClicked: false,
			title: '',
			url: '',
			value: '',
		}

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleInputChange = this.handleInputChange.bind(this);
	}	

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		// alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
		console.log(this.state);
		

	}

	handleInputChange(event) {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
	    console.log(this.state);
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
							<li>							
								<a href="{resource.title}">{resource.title}</a>
							</li>	
						)} 
					)}
				</ul>

				<br/><br/><br/>
				
				<button onClick={this.handleClick}>I'm a Button!</button>

				<br/><br/><br/>
				<form onSubmit={this.handleSubmit}>
			        <label>
			          Subject:
			          <input type="text" value={this.state.value} onChange={this.handleChange} />
			        </label>
			        <input type="submit" value="Submit" />
			    </form>

			    <br/><br/><br/>
			    <form>
			        <label>
			          title:
			          <input
			            name="title"
			            type="text"
			            checked={this.state.title}
			            onChange={this.handleInputChange} />
			        </label>
			        <br />
			        <label>
			          url:
			          <input
			            name="url"
			            type="text"
			            value={this.state.url}
			            onChange={this.handleInputChange} />
			        </label>
			      </form>

			</div>
		)
	}
}