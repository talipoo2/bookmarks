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
		// console.log(this.state);
		const newResource = {
			title: this.state.title,
			url: this.state.url,
		}
		this.props.addResource(this.props.index, newResource);
	}

	handleInputChange(event) {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
	    // console.log(this.state);
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
					{this.props.items.resources.map((resource, i) => { 
						return(	
							<li key={i}>							
								<a href="{resource.title}">{resource.title}</a>
							</li>	
						)} 
					)}
				</ul>

				<br/><br/><br/>
				
			    <form>
			        <label>
			          title:
			          <input
			            name="title"
			            placeholder="title"
			            type="text"
			            value={this.state.title}
			            onChange={this.handleInputChange} />
			        </label>
			        <br />
			        <label>
			          url:
			          <input
			            name="url"
			            placeholder="url"
			            type="text"
			            value={this.state.url}
			            onChange={this.handleInputChange} />
			        </label>
			        <br/><br/>
			        <select>
					  <option value="grapefruit">Grapefruit</option>
					  <option value="lime">Lime</option>
					  <option selected value="coconut">Coconut</option>
					  <option value="mango">Mango</option>
					</select>

					<br/><br/><br/>
			        <button onClick={this.handleSubmit}>Click me!</button>
			      </form>

			</div>
		)
	}
}