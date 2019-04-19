import React from 'react';



class SmurfForm extends React.Component {
  state ={
    name: '',
    age: '',
    height: ''
  }

  addSmurf = e => {
    e.preventDefault();
    
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

    render(){
      return(
        <div className='SmurfForm'>
          <form onSubmit={this.addSmurf}>
            <input
              type='text'
              onChange={this.handleInput}
              placeholder='name'
              value={this.state.name}
              name='name' 
            />
            <input
              type='text'
              onChange={this.handleInput}
              placeholder='age'
              value={this.state.age}
              name='age' 
            />
            <input
              type='text'
              onChange={this.handleInput}
              placeholder='email'
              value={this.state.email}
              name='email' 
            />
            <button type='submit'>Add Smurf</button>
          </form>
        </div>
      )
    }

}

export default SmurfForm;