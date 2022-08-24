import React, { Component } from 'react'
import Form from './Form';
import List from './List';
import PropTypes from 'prop-types';


class Contact extends Component {
    static propTypes={
        contacts:PropTypes.array.isRequired,
        addContact:PropTypes.func
    }
  render() {
    return (
      <div>
        <List contacts={this.props.contacts}/>
        <Form addContact={this.props.addContact}/>
      </div>
    )
  }
}
export default  Contact;