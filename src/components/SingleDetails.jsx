import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SingleView } from "../store/api/post.route";
import { Button, Card, Container } from "react-bootstrap";
import { Col, Row } from "reactstrap";

const SingleDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  console.log("params", params);
  const [character, setCharacter] = useState();
  console.log("character", character);

  useEffect(
    (id) => {
      dispatch(SingleView(params.id));
    },
    [dispatch, params.id]
  );
  const { postView } = useSelector((state) => state.post);
  console.log("postView", postView);
  useEffect(() => {
    setCharacter(postView);
  }, [postView]);
  return (
    <div className="mt-5">
      <Container>
        <Card className="text-center shadow p-3">
          <Row>
            <Col md="4">
              <h4 style={{ color: "green" }}>id : </h4>
            </Col>
            <Col md="6">
              <h4 style={{ color: "gray" }}> {character?.id}</h4>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <h4 style={{ color: "green" }}>title : </h4>
            </Col>
            <Col md="6">
              <h4 style={{ color: "gray" }}> {character?.title}</h4>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <h4 style={{ color: "green" }}>userId : </h4>
            </Col>
            <Col md="6">
              <h4 style={{ color: "gray" }}> {character?.userId}</h4>
            </Col>
          </Row>
          <Row>
            <Col md="4  ">
              <h4 style={{ color: "green" }}>body :</h4>
            </Col>
            <Col md="6">
              <h4 style={{ color: "gray" }}>{character?.body}</h4>
            </Col>
          </Row>
        </Card>{" "}
        <div className="mt-2 d-flex align-items-center justify-content-center">
          <Link to={"/list"}>
            <Button className="mt-4">Back</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default SingleDetails;
