import "./SettingsPage.css";

import { Card, Col, Form, Row, Button } from "react-bootstrap";

function OverviewPage() {
  return (
    <div>
      <Card className="my-4">
        <Card.Header>Vote for Hyperchain X Notifications</Card.Header>
        <Card.Body>
          <Row>
            <Form.Group>
              <Form.Label className="float-left">
                Do you wish to get a reminder?
              </Form.Label>
              <Form.Check
                id="reminder_enabled"
                name="reminder_enabled"
                type="radio"
                label="Yes"
              />
              <Form.Check
                id="reminder_enabled"
                name="reminder_enabled"
                type="radio"
                label="No"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Label column xs="4">
              At what time?
            </Form.Label>
            <Col xs="8">
              <Form.Control type="time" id="reminder_time" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row>
        <Col>
          <Button variant="primary" className="float-right">
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default OverviewPage;
