import React, { Component } from 'react';

export default class NewSubject extends Component {
	constructor(props) {
		super(props);

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			subject: "Enter Subject Here",
			resources: [],
		}
	}

	// event handlers
  	handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }

    handleSubmit(event) {
    	event.preventDefault();
    	const newSubject = {
    		subject: this.state.subject,
    		resources: [],
    	}
    	this.props.addNewSubject(newSubject);
    }
	
	render() {
		return(
			<div>
				<br/> <br/> <br/> <br/>
				<h2>Add New Subject:</h2>
				<form>
					<label>
					Add New Subject:
					</label>
					<input
						name="subject"
						type="text"
						value={this.state.subject}
						onChange={this.handleInputChange}
					/>
					<button onClick={this.handleSubmit}>Add New Subject</button>
				</form>
        	</div>
		)
	}
}

// 
// 	          	
// 	          	<form>
// 	            <label htmlFor="subject">
// 	            Add New Subject:
// 	            </label>
// 	            <input
// 	            name="subject"
// 	            placeholder="subject"
// 	            type="text"
// 	            value={this.state.subject}
// 	          	onChange={this.handleInputChangeSubject} />
// 	         	</form>
// 	         	<button onClick={this.addNewSubject}>Add Subject</button>