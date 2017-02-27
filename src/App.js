import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Subject from './Subject';
import NewSubject from './NewSubject';
// import Button from './Button';
// import InputField from './InputField';

// import Content from './Content.json';

class App extends Component {

  constructor(props) {
    super(props);

    this.addNewResource = this.addNewResource.bind(this);
    this.addNewSubject = this.addNewSubject.bind(this);

    this.state =  { 

                    subject: '',
                    resources : [

                    {subject : "Functional Programming Basics", 
                    resources :[
                      
                      {
                        title: "Higher-order functions - Part 1 of Functional Programming in JavaScript", 
                        url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"},

                      {
                        title: "var, let and const - What, why and how - ES6 JavaScript Features", 
                        url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"}, 
                      
                      {
                        title: "Arrow functions in JavaScript - What, Why and How - FunFunFunction #32", 
                        url: "https://www.youtube.com/watch?v=6sQDTgOqh-I"}
                    ]},

                    {

                    subject : "ES6", 
                    resources :[

                      {
                        title: "Essential ES6 / ES2015 JavaScript", 
                        url: "https://www.youtube.com/watch?v=CozSF5abcTA"},
                      
                      {
                        title: "JavaScript ES6+: var, let, or const?", 
                        url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.xv9uppvae"},
                      
                      {
                        title: "Arrow functions", 
                        url: "http://stack.formidable.com/es6-interactive-guide/#/"},
                      
                      {
                        title: "Javascript ES6 Cheatsheet - the best of JS ES6", 
                        url: "https://www.youtube.com/watch?v=AfWYO8t7ed4"},
                      
                      {
                        title: "Javascript ES6 Cheatsheet #2 - the best of JS ES6", 
                        url: "https://www.youtube.com/watch?v=LmL0Gh193M0"},
                      
                      {
                        title: "ECMAScript 6 / ES6 New Features - Tutorial 1 - Let", 
                        url: "https://www.youtube.com/watch?v=ZJZfIw3P8No&list=PL6gx4Cwl9DGBhgcpA8eTYYWg7im72LgLt"},
                      
                      {
                        title: "Learn ES6 (ECMAScript 2015)", 
                        url: "https://egghead.io/courses/learn-es6-ecmascript-2015"}
                    ]}

                  ]}
  }

  // event handlers go here

  addNewResource(subject,resource) {
    const tempState = this.state;
    tempState.resources[subject].resources.push(resource);
    this.setState(tempState);
  }

  addNewSubject(subject) {
    const tempState = this.state;
    tempState.resources.push(subject);
    this.setState(tempState);
  }

  deleteSubject(subject) {
  }

  render() {
    return (
      <div>
        {this.state.resources.map((resource, index) => {
          return (
                  <div>
                    <Subject index={index} addResource={this.addNewResource} items={resource} key={index} />
                  </div>       
            )
          }
        )}
        <NewSubject addNewSubject={this.addNewSubject} />
      </div>
    );
  }
}

export default App;
