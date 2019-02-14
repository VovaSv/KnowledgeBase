import _ from "lodash";
import React, { Component } from "react";
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
  Label,
  Message
} from "semantic-ui-react";

const WishComponent = props => {
  const { diffDate } = props;

  console.log(" fromWishComponent FireStore data ", props);
  console.log("Reward = ", props.reward ? "true" : "false");
  return (
    <Card fluid link>
      <Card.Content>
        <Grid>
          <Grid.Column width={1} verticalAlign="middle">
            {props.imageURL ? (
              <Image
                circular
                size="tiny"
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              />
            ) : (
              <Label
                size="large"
                color="pink"
                circular
                style={{ marginRight: "4px" }}
              >
                {props.userInitials}
              </Label>
            )}
          </Grid.Column>
          <Grid.Column width={7} verticalAlign="middle">
            <label
              style={{
                fontWeight: 700,
                fontSize: "1.28571429em",
                marginTop: "-.21425em",
                lineHeight: "1.28571429em"
              }}
            >
              {props.userFirstName}
            </label>
          </Grid.Column>
          <Grid.Column width={8} align="right" verticalAlign="middle">
            <label
              floated="right"
              style={{
                fontSize: "1em",
                color: "rgba(0, 0, 0, 0.4)"
              }}
            >
              {diffDate ? `${diffDate} ago` : null}
            </label>
          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content>
        <Card.Header>Link data</Card.Header>
        <Message>
          <Message.Header>Real data from DB</Message.Header>
          <Message.List>
            <Message.Item>
              <strong>Link data - </strong> {props.linkData}
            </Message.Item>
            <Message.Item>
              <strong>Link description - </strong> {props.linkDescription}
            </Message.Item>
            <Message.Item>
              <strong>Shared link ID - </strong> {props.sharedLinkId}
            </Message.Item>
            <Message.Item>
              <strong>Is shared - </strong>{" "}
              {props.linkData ? (
                <Icon color="green" name="check" />
              ) : (
                <Icon color="red" name="close" />
              )}
            </Message.Item>
          </Message.List>
        </Message>
      </Card.Content>
      <Card.Content extra>
        <Grid stackable>
          <Grid.Column width={12} />
        </Grid>
      </Card.Content>
    </Card>
  );
};

export default WishComponent;
