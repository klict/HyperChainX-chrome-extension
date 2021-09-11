import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OverviewPage from "./presentation/pages/overviewPage/OverviewPage";
import largeLogo from "./resource/branding/large_logo.png";

import { Container, Navbar } from "react-bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <header>
      <Navbar className=" d-flex justify-content-center">
        <Navbar.Brand>
          <a href="http://hyperchainx.com/" target="_blank" rel="noreferrer">
            <img src={largeLogo} height="40" alt="Logo of hyperChainX" />
          </a>
        </Navbar.Brand>
      </Navbar>
    </header>
    <Container>
      <Router>
        <OverviewPage />
      </Router>
    </Container>
    <footer className="py-3 text-center">
      <span className="text-white">© 2021 Developed by klict</span>
    </footer>
  </React.StrictMode>,
  document.getElementById("root")
);
