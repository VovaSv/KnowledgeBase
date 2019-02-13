import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBarContainer from "./common/components/navbar/NavBarContainer";
import Footer from "./common/components/footer/FooterComponent";
import { Container } from "semantic-ui-react";
import MainPageContainer from "./main-page/MainPageContainer";
import AddLinkMainContainer from "./add-link-page/AddLinkMainContainer";
import SignUpMainContainer from "./signup-page/SignUpMainContainer";
import AboutMainComponent from "./about-page/AboutMainComponent";
//import LinkDetailsMainContainer from "./wish-details-page/WishDetailsMainContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <OnTopNavBar /> */}
          <NavBarContainer />
          <Container style={{ marginTop: "100px", minHeight: "85vh" }}>
            <Switch>
              <Route exact path="/app" component={MainPageContainer} />
              <Route exact path="/add-link" component={AddLinkMainContainer} />
              <Route exact path="/signup" component={SignUpMainContainer} />
              <Route exact path="/about" component={AboutMainComponent} />
              {/*<Route path="/link/:id" component={LinkDetailsMainContainer} /> */}
              <Redirect to="/app" />
            </Switch>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
