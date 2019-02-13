import _ from "lodash";
import React, { Component } from "react";
import LinkComponent from "./LinkComponent";
import { Link } from "react-router-dom";
import dateDiff from "../common/utils/dates/dateDiff";
import {
  Image,
  Button,
  Card,
  Grid,
  Icon,
  Header,
  Segment,
  Divider
} from "semantic-ui-react";

export default class MainPageComponent extends Component {
  render() {
    const currentDate = new Date();
    return (
      <>
        {this.props.links &&
          this.props.links.map(link => {
            const diffDate = dateDiff(link.createdDate, currentDate);
            return (
              <Link to={"/link/" + link.id}>
                <LinkComponent {...link} key={link.id} diffDate={diffDate} />
                <Divider hidden />
              </Link>
            );
          })}
      </>
    );
  }
}
