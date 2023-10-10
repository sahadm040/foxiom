import React, { useEffect, useState } from "react";
import { Badge, Table } from "reactstrap";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { allCharacters } from "../store/api/character.route";
import { map } from "lodash";
import { Link } from "react-router-dom";

const ListTable = () => {
  const dispatch = useDispatch();
  const [characterListView, setCharacterListView] = useState();
  console.log("characterListView", characterListView);

  useEffect(() => {
    dispatch(allCharacters());
  }, [dispatch]);
  const { characterViewObject } = useSelector((state) => state.character);
  useEffect(() => {
    setCharacterListView(characterViewObject);
  }, [characterViewObject]);
  return (
    <div className="my-4">
      <Container>
        <Card className="shadow">
          <Table responsive>
            <thead>
              <tr className="table-success">
                <th>ID</th>
                <th>title</th>
                <th>userId</th>
                <th>body</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {map(characterListView, (item, key) => (
                <tr key={key}>
                  <th scope="row">{item?.id}</th>
                  <td>{item?.title}</td>
                  <td style={{ color: "gray" }}>{item?.userId}</td>
                  <td>{item?.body}</td>
                  <td>
                    <Link to={`/details/${item?.id}`}>
                      <Badge color="primary">details</Badge>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Container>
    </div>
  );
};

export default ListTable;
