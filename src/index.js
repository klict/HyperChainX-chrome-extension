import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OverviewPage from "./presentation/pages/overviewPage/OverviewPage";
import SettingsPage from "./presentation/pages/settingsPage/SettingsPage";
import largeLogo from "./resource/branding/large_logo.png";

import { Container, Navbar, Nav } from "react-bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <header>
        <Navbar className=" d-flex justify-content-center">
          <Navbar.Brand>
            <a href="http://hyperchainx.com/" target="_blank" rel="noreferrer">
              <img src={largeLogo} height="40" alt="Logo of hyperChainX" />
            </a>
          </Navbar.Brand>
          <Nav>
            <Nav.Item>
              <Link
                to="/"
                role="button"
                className="nav-link text-white text-decoration-none"
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/settings"
                role="button"
                className="nav-link text-white text-decoration-none"
              >
                Settings
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </header>
      <Container>
        <Route exact path="/" component={OverviewPage} />
        <Route path="/settings" component={SettingsPage} />
      </Container>
      <footer className="py-3 text-center">
        <span className="text-white">© 2021 Developed by klict</span>
      </footer>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
