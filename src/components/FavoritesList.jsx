import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TrashFill } from "react-bootstrap-icons";

const Favorites = () => {
  const favorites = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>
            Your <span className="text-danger">favourites jobs</span> list
          </h1>
          <Button onClick={() => navigate("/")}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favorites.map((fav, i) => (
              <ListGroupItem key={i}>
                <TrashFill
                  color="red"
                  size={18}
                  className="m-3"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_FAVOURITES",
                      payload: fav,
                    })
                  }
                />
                <Link to={"/" + fav}>{fav}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Favorites;
