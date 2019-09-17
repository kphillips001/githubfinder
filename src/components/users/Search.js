import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Search extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  }

  onSubmit = (evt) => {
    evt.preventDefault(); 
    this.props.searchUsers(this.state.text);
    this.setState({ text: ''});
  }
    
  onChange = (evt) => this.setState({ [evt.target.name]: evt.target.value });
    
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'> 
          <input 
            type='text' 
            name='text' 
            placeholder='Search Users...'
            value = {this.state.text}
            onChange = {this.onChange}
            />
          <input 
            type ='submit'
            value='Search'
            className='btn btn-dark btn-block'
            /> 
        </form>
      </div>
    )
  }
}

export default Search
