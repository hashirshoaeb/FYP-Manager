import React, { Component } from "react";
import { milestone } from "../../mock-model/milestones";

class Milestone extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <GraphView />
        <TextView />
      </div>
    );
  }
}

class GraphView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milestoneslist: milestone
    };
  }
  render() {
    return (
      <div className="container-fluid">
        {/* <svg width="500" height="500">
          <line
            x1="10"
            x2="100"
            y1="50"
            y2="50"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
          <rect x="10" y="0" width="10" height="10" transform=" " />
          <path
            d="M 5 75 Q 50 100 100 75 T 190 75"
            stroke="black"
            stroke-linecap="round"
            stroke-dasharray="5,10,5"
            fill="none"
          />
        </svg> */}
      </div>
    );
  }
}

class TextView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milestoneslist: milestone
    };
  }
  render() {
    const m_list = this.state.milestoneslist;
    console.log();
    return (
      <div class="table-responsive-lg">
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">Day Start</th>
              <th scope="col">Day End</th>
              <th scope="col">Total days</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {m_list.map((value, index) => (
              <tr key={value.id}>
                <td> {value.start_day} </td>
                <td> {value.end_day} </td>
                <td> {value.end_day - value.start_day + 1} </td>
                <td> {value.title} </td>
                <td> {value.description} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Milestone;
