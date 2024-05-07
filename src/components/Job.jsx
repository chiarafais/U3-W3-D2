import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const favorites = useSelector((state) => state.favourites.content);

  const dispatch = useDispatch();

  const isFav = favorites.includes(data.company_name);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={5}>
        {isFav ? (
          <StarFill
            color="gold"
            size={18}
            className="mr-2 m-3 my-auto"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_FAVOURITES",
                payload: data.company_name,
              })
            }
          />
        ) : (
          <Star
            color="gold"
            size={18}
            className="mr-2 m-3 my-auto"
            onClick={() =>
              dispatch({
                type: "ADD_TO_FAVOURITES",
                payload: data.company_name,
              })
            }
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
