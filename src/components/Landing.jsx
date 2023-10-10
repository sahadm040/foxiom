import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
const Landing = () => {
  return (
    <div className="m-5">
      <Container>
        <Card className="text-center shadow py-4">
          <h2>JSON Placeholder</h2>
          <Card.Body>
            <Card.Title style={{ color: "gray" }}>
              {" "}
              {"{JSON} Placeholder"}
            </Card.Title>

            <Card.Text>Free fake API for testing and prototyping.</Card.Text>
            <h6>Powered by JSON Server + LowDB. Tested with XV.</h6>

            <Link to={`/list`}>
              <Button className="success mt-4">{"{JSON} list"}</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Landing;
