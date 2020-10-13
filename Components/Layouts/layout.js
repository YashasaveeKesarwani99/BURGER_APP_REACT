import React, { Component } from "react";
import "./layout.css";
import SideDrawer from "../Navigation/SideDrawer/sideDrawer";
import "../Navigation/Toolbar/toolbar";
import Toolbar from "../Navigation/Toolbar/toolbar";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false
    };
  }

  sideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  openSideDrawer = () => {
    this.setState({ showSideDrawer: true });
  };

  render() {
    return (
      <div>
        <Toolbar clicked={this.openSideDrawer} />
        <SideDrawer
          boolean={this.state.showSideDrawer}
          clicked={this.sideDrawerHandler}
        />
        <div>SideDrawer, Backdrop</div>
        <main className="content">{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
