import React, { Component } from "react";
import data from "../../mock-model/milestones.json";

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
      milestoneslist: data.milestone
    };
  }
  render() {
    return <div className="container-fluid"></div>;
  }
}

class TextView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milestoneslist: data.milestone
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
