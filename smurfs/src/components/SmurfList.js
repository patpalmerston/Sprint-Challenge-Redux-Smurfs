import React from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux';
import { getSmurfs } from '../actions';



class SmurfList extends React.Component {
  componentDidMount(){
    this.props.getSmurfs();
  }

  render(){
    console.log(this.props.smurfs)

    return(
      <div>
        {this.props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ smurfs, fetchingSmurf }) => ({
  smurfs,
  fetchingSmurf
})

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
