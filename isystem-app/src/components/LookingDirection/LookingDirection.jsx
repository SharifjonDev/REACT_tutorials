import Button from "../Button/Button";
import Col from "../UI/Col";
import Container from "../UI/Container";
import Row from "../UI/Row";
import classes from "./style/LookingDirection.module.scss";

const LookingDirection = () => {
  return (
    <Container>
      <Row>
        <Col className={"col-xl-12"}>
          <div className={classes.mainTitle}>
            <h1>O’zingizga mos yo’nalishni topdingizmi ?</h1>
            <Button className={"btn-weHelper"}>
              Biz ko’maklashamiz
              <span
                className={`icon icon-rightPointer ${classes.rightPointer}`}
              ></span>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LookingDirection;
