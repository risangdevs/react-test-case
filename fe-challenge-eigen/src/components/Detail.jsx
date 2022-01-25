import "../App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../store/action";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  CardImg,
  CardGroup,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const {id} = useParams();
//   console.log(id);
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state);
  console.log(news);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  const navigate = useNavigate();
  const toHome = () => {
      navigate('/')
  };
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center">
            <Card className="card">
              <CardBody>
                <CardTitle tag="h5">{news[id].title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {news[id].author}
                </CardSubtitle>
              </CardBody>
              <CardImg
                alt="Card image cap"
                src={news[id].urlToImage}
                top
                width="100%"
              />
              <CardBody>
                <CardText>{news[id].content}</CardText>
                <CardText>{news[id].source.name}</CardText>
                <CardLink href='#' onClick={toHome}>Back</CardLink>
                <CardLink href={news[id].url}>To External Website</CardLink>
              </CardBody>
            </Card>
      </div>
    </div>
  );
}

export default Detail;
