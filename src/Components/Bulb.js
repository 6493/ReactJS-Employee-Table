import React from "react";

export default class BulbLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isBulbOn: false };
  }
  bulbOnOff = () => {
    this.setState({ isBulbOn: !this.state.isBulbOn });
  };
  render() {
    return (
      <div>
        <div className={this.state.isBulbOn ? "on" : "off"} />
        <button onClick={this.bulbOnOff}>
          {this.state.isBulbOn ? "OFF" : "ON"}
        </button>
      </div>
    );
  }
}
