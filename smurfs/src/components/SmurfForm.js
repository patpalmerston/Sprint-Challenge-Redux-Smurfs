import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions'



class SmurfForm extends React.Component {
  state ={
    name: '',
    age: '',
    height: ''
  }

  

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
    
  }

    render(){
      return(
        <div className='SmurfForm'>
          <form onSubmit={this.formSubmit}>
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
              placeholder='height'
              value={this.state.height}
              name='height' 
            />
            <button type='submit'>Add Smurf</button>
          </form>
        </div>
      )
    }

}

const mapStateToProps = state => {
  return {
    error: state.error,
    addingSmurf: state.addingSmurf
  }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm);

