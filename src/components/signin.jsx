import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleSub = () => {
    // increment without changing state
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    //   const astyle = {
    //     margin: "100px",
    //     imageUrl: "https://picsum.photos/200"
    //   };
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    React.createElement("div");
    return (
      <div
        //  styles={{ backgroundImage: `url(${pic})` }}
        className="justify-content-md-center min-vh-100 d-flex  align-items-center flex-wrap "
      >
        <div className="row ">
          <div className="col">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                {/* <img src={this.state.imageUrl} alt="" /> */}

                <h5 className="card-title">SignIn for Teacher</h5>

                <div className="form-group">
                  <label for="expameleforname">Name:</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="etc. Khizar"
                  ></input>
                </div>
                <div className="form-group">
                  <label for="exampleforemail">Email:</label>
                  <input
                    type="email"
                    className="form-control "
                    placeholder="Email@com.com"
                  ></input>
                </div>
                <div className="form-group">
                  <label for="expameleforPassword">Password:</label>
                  <input
                    type="password"
                    className="form-control "
                    placeholder="Password"
                  ></input>
                </div>
                <br></br>
                <button className="btn btn-primary btn-sm"> Signin </button>
                <span className={classes}> {this.formatCount()}</span>
              </div>
            </div>
          </div>
          <div className="col-sm-1 " />
          <div className="col">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                {/* <img src={this.state.imageUrl} alt="" /> */}

                <h5 className="card-title">SignIn for Student</h5>
                <div className="form-group">
                  <label for="expameleforname">Name:</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="etc. Khizar"
                  ></input>
                </div>
                <div className="form-group">
                  <label for="exampleforemail">Email:</label>
                  <input
                    type="email"
                    className="form-control "
                    placeholder="Email@com.com"
                  ></input>
                </div>
                <div className="form-group">
                  <label for="expameleforPassword">Password:</label>
                  <input
                    type="password"
                    className="form-control "
                    placeholder="Password"
                  ></input>
                </div>
                <br></br>
                <button
                  onClick={this.handleSub}
                  className="btn btn-primary btn-sm"
                >
                  Signin
                </button>
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
