import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: ''
  }

  onSubmit = (evt) => {
    evt.preventDefault(); 
    console.log(this.state.text);
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
