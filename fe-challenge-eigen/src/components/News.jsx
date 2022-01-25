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
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

function News() {
  const dispatch = useDispatch();
  const { news, isLoading } = useSelector((state) => state);
  //   console.log(news);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  const navigate = useNavigate();
  const toDetail = (id) => {
    navigate(`/${id}`);
  };
  const override = css`
    display: block;
    margin: 10% auto;
    border-color: steelblue;
  `;
  if (isLoading) {
    return <ClipLoader color="#ffffff" css={override} size={150} />;
  } else {
    return (
      <div>
        <div className="d-flex flex-wrap justify-content-center">
          {news.map((e, i) => {
            return (
              <Card className="card" key={i}>
                <CardBody>
                  <CardTitle tag="h5">{e.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {e.author}
                  </CardSubtitle>
                </CardBody>
                <CardImg
                  alt="Card image cap"
                  src={e.urlToImage}
                  top
                  width="100%"
                />
                <CardBody>
                  <CardText>{e.description}</CardText>
                  <CardLink href="#" onClick={() => toDetail(i)}>
                    Detail
                  </CardLink>
                  <CardLink href={e.url}>To External Website</CardLink>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
