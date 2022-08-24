import Contact from "./Contact";
import "./App.css";
import React from "react";
import { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.addContact=this.addContact.bind(this);
  }
  
  state={
    contacts:[
      {name:'Can',phone:'555 55 55 '},
      {name:'Tuba',phone:'535 35 35 '},
    ]
  };
  addContact(contact){
    console.log(contact);
    const{contacts}=this.state;
    contacts.push(contact);
    this.setState(
      {
        contacts:contacts
      }
    );
  }
  render() {
    return (
      <div className="App">
        <Contact addContact={this.addContact} contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
