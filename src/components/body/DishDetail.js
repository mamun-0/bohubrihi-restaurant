import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";
import CommentForm from "./CommentForm";
const DishDetail = (props) => {
  const { id, image, title, price, description } = props.selectedDish;
  return (
    <div>
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src={image}
          style={{
            height: "100%",
          }}
          top
          width="100%"
        />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{description}</CardText>
          <CardText>{price}/-</CardText>

          <hr />
          <LoadComments comments={props.comments} />
          <CommentForm dishId={id} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
