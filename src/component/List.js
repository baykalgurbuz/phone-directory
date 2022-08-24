import React, { Component } from 'react'
import '../styling/List.css';
import PropTypes from 'prop-types';



class List extends Component {
    static propTypes={
        contacts:PropTypes.array.isRequired
    }
    state={
        filterText:''
    }
    onChangeFilterText=(e)=>{
        console.log(e.target.value)
        this.setState({
            filterText:e.target.value
        })
    }
  render() {
    const filteredContcats=this.props.contacts.filter(
        contact =>{
            return contact.name.toLowerCase().indexOf(
                this.state.filterText.toLocaleLowerCase()
            ) !==-1
        }
    );
    return (
      <div className={'listArea'}>
        <input value={this.state.filterText} onChange={this.onChangeFilterText} name={'filter'} id='filter' placeholder='filter bt name or phone'/>
        <ul className={'list'}>
        {
            filteredContcats.map(contact =>
            <li key={contact.phone}>
            <span className={'name'}>{contact.name}</span>
            <span className={'phone'}>{contact.phone}</span>
            <span className={'clearfix'}></span>
            </li>
            )
        }
            
            
            
        </ul>
      </div>
    )
  }
}
export default List;