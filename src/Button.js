import React from 'react';

export class Button extends React.Component {

// eventhandler function(callback)
  grabVal = (e) => {
    const value = e.target.value;
  var num1 = value.concat(this.update);
    this.props.onClick(num1);
  };

  render() {
    return(

      <div className = 'buttons'>
        <h1><b>React Calculator</b></h1>
        <br/>

        <span>
          <button value = {'0'} onClick = {this.grabVal}>0</button>
        </span>
        <span>
          <button value = {'1'} onClick = {this.grabVal}>1</button>
        </span>
        <span>
          <button value = {'2'} onClick = {this.grabVal}>2</button>
        </span>
        <span>
          <button value = {'3'} onClick = {this.grabVal}>3</button>
        </span>
        <span>
          <button value = {"+"} onClick = {this.grabVal}>+</button>
        </span>
        <br/>
        <span>
          <button value = {'4'} onClick = {this.grabVal}>4</button>
        </span>
        <span>
          <button value = {'5'} onClick = {this.grabVal}>5</button>
        </span>
        <span>
          <button value = {'6'} onClick = {this.grabVal}>6</button>
        </span>
        <span>
          <button value = {'7'} onClick = {this.grabVal}>7</button>
        </span>
        <span>
          <button>-</button>
          <br/>
        </span>
        <span>
          <button value = {'8'} onClick = {this.grabVal}>8</button>
        </span>
        <span>
          <button value = {'9'} onClick = {this.grabVal}>9</button>
        </span>
        <span>
          <button>*</button>
        </span>
        <span>
          <button>÷</button>
        </span>
        <span>
          <button>=</button>
        </span>
        <span>
          <button>clear</button>
        </span>
      </div>
    )
  }
}
// export default Button;
