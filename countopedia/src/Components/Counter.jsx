import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddition = this.handleAddition.bind(this);
    this.handleSubtraction = this.handleSubtraction.bind(this);
    this.isItOver = this.isItOver.bind(this);
    this.state = {
      count: 0,
      lastPlay: [],
      gameStatus: "",
    };
  }
  isItOver(score) {
    if (score >= 10) {
      return this.setState((prevState) => {
        prevState.gameStatus = "You Won";
      });
    } else if (score <= -10) {
      return this.setState((prevState) => {
        prevState.gameStatus = "You Lost";
      });
    } else {
      return this.setState({gameStatus : ""})
    }
  }
  handleAddition() {
    this.setState((coxinha) => {
      let result = coxinha.count + 1;
      coxinha.lastPlay.push("+1");
      return {
        count: result,
        gameStatus: result >=10 ? "You Won" : ""
      };
    });
  }
  handleSubtraction() {
    this.setState((prevState) => {
      let result = prevState.count - 1;
      prevState.lastPlay.push("-1")
      return {
        count: result,
        gameStatus: result >=10 ? "You Won" : "", 
      };
    });
    this.isItOver();
  }

//   handleSubtraction() {
//     this.setState((prevState) => {
//       let result = prevState.count - 1;
//       this.isItOver(result);
//       prevState.lastPlay.push("subtracted");
//       console.log(this.state.lastPlay)
//       return {
//         count: result,
//       };
//     });
//     this.isItOver();
//   }

  render() {
    return (
      <div>
        <div className="row text-center justify-content-around">
          <h4> Counter: {this.state.count} </h4>
          <h5> State: {this.state.gameStatus}</h5>
          <button
            onClick={this.handleAddition}
            className="text-success"
            style={{ width: "45%" }}
          >
            +1
          </button>
          <button
            onClick={this.handleSubtraction}
            className="text-danger"
            style={{ width: "45%" }}
          >
            -1
          </button>
        </div>
        <div>
            Last Plays : {this.state.lastPlay.join(", ")}
        </div>
      </div>
    );
  }
}

export default Counter;
