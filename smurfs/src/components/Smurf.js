import React from 'react'



function Smurf(props) {
  return(
    <div>
      <h1>{props.smurf.name}</h1>
      <h2>{props.smurf.age}</h2>
      <h4>{props.smurf.height}</h4>
    </div>
  )
}

export default Smurf;