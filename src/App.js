import React, { Component } from "react";

class App extends Component {
  state = { count: 0, show: false,text:'' };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handDecrement = () => {
    this.state.count && this.setState({ count: this.state.count - 1 });
  };
  handleShaw = () => {
     this.state.show ?  this.setState({...this.state, show: false}) : this.setState({ show: true });
  };
  handleChange=(e)=>{
    this.setState({...this.state, text: e.target.value})
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleIncrement}>+</button>
          <h1>{this.state.count}</h1>
          <button onClick={this.handDecrement}>-</button>
        </div>
        <button onClick={this.handleShaw}>Show</button>
        {this.state.show && (
          <div>
            <h1>hellpo</h1>
          </div>
        )}
         <form>
         <input onChange={this.handleChange}/>
         
         </form>
         {this.state.text}
      </div>
    );
  }
}
export default App;
