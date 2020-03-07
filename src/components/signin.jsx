import React, { Component } from "react";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // imageUrl: "https://picsum.photos/200",
      count: 0
    };
    // this.style = {
    //   fontSize: 10,
    //   fontWeight: "bold"
    // };
  }

  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    React.createElement("div");
    return (
      <div className="container">
        <div class="row">
          <div class="col-sm-6">
            <div className="card">
              <div className="card-body">
                {/* <img src={this.state.imageUrl} alt="" /> */}

                <h5 className="card-title">SignIn for Teacher</h5>
                <h5 className="card-text">Enter Name</h5>

                <input type="text"></input>
                <h4>Email</h4>
                <input type="text"></input>
                <h4>Password</h4>
                <input type="text"></input>
                <br></br>
                <button className="btn btn-primary btn-sm"> Signin </button>
                <span className={classes}> {this.formatCount()}</span>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div className="card">
              <div className="card-body">
                {/* <img src={this.state.imageUrl} alt="" /> */}

                <h5 className="card-title">SignIn for Student</h5>
                <h5 className="card-text">Enter Name</h5>

                <input type="text"></input>
                <h4>Email</h4>
                <input type="text"></input>
                <h4>Password</h4>
                <input type="text"></input>
                <br></br>
                <button className="btn btn-primary btn-sm"> Signin </button>
                <span className={classes}> {this.formatCount()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  formatCount() {
    // const{count}=this.State
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Signin;
