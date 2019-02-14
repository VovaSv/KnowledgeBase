import _ from "lodash";
import React, { Component } from "react";
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
  Divider,
  Message
} from "semantic-ui-react";

export default class MainPageComponent extends Component {
  render() {
    const linkDetails = this.props.linkDetails;
    return (
      <>
        {linkDetails ? (
          <Card>
            <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
            <Card.Content>
              <Card.Header>{linkDetails.linkData}</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                <Message>
                  <Message.Header>Real data from DB</Message.Header>
                  <Message.List>
                    <Message.Item>
                      <strong>Link data - </strong> {linkDetails.linkData}
                    </Message.Item>
                    <Message.Item>
                      <strong>Link description - </strong>{" "}
                      {linkDetails.linkDescription}
                    </Message.Item>
                    <Message.Item>
                      <strong>Shared link ID - </strong>{" "}
                      {linkDetails.sharedLinkId}
                    </Message.Item>
                    <Message.Item>
                      <strong>Is shared - </strong>{" "}
                      {linkDetails.linkData ? (
                        <Icon color="green" name="check" />
                      ) : (
                        <Icon color="red" name="close" />
                      )}
                    </Message.Item>
                  </Message.List>
                </Message>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        ) : null}
      </>
    );
  }
}
