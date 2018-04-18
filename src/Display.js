import React from 'react';
import {Button} from './Button';

class Display extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: 0};

  }
  update = (button)=> { // updates function
    this.setState({
      value: button
    });
  }
  render(){
    return(
      <div>
        <h1>{this.state.value}</h1>
        <Button onClick = {this.update} />
      </div>
    )
  }
}

export default Display;
