import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;

  return (
    <Card className="mb-4">
      <Card.Header>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
            <div className="ms-2">
              <h5>{author?.name}</h5>
              <span>
                <>{moment(author?.published_date).format("YYYY-MM-D")}</>
              </span>
            </div>
          </div>
          <div>
            <FaRegBookmark className="mx-2" />
            <FaShareAlt />
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-start">{title}</Card.Title>
        <Card.Text className="text-start">
          <Card.Img className="mb-2" variant="top" src={image_url} />
          {details.lenght > 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link
                className="fw-semibold text-warning text-decoration-none"
                to={`/news/${_id}`}
              >
                Read More
              </Link>{" "}
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div className="d-flex align-items-center">
        <Rating style={{ maxWidth: 150 }} value={Math.round(rating?.number|| 0)} readOnly />
          <span className="ms-2"> {rating?.number}</span>
        </div>

        <div>
          <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
