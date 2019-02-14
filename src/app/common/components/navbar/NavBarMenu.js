import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Header, Visibility } from "semantic-ui-react";
import styles from "../../style/style.css.js";

const NavBarMenuComponent = props => {
  return (
    <Visibility
      onBottomPassed={props.setShadowMenu}
      onBottomVisible={props.unSetShadowMenu}
      once={false}
    >
      <div>
        <Menu borderless fixed="top" style={props.menuStyle}>
          <Menu.Item>
            <Icon loading name="life ring" />
          </Menu.Item>
          <Menu.Item
            onClick={props.handleItemClick}
            name="logo"
            as={Link}
            name="app"
            exact
            to="/app"
          >
            <Header>Knowledge Base</Header>
          </Menu.Item>
          {/* <Menu.Item
          as={Link}
          onClick={props.handleItemClick}
          name="app"
          exact
          to="/app"
          active={props.activeItem === "app"}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          onClick={props.handleItemClick}
          active={props.activeItem === "about"}
          name="about"
          to="/about"
        >
          About
        </Menu.Item>
        */}

          <Menu.Menu position="right">
            <Menu.Item />
            {props.children}
          </Menu.Menu>
        </Menu>
      </div>
    </Visibility>
  );
};

export default NavBarMenuComponent;
