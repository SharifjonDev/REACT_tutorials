import React from "react";
import Col from "../UI/Col";
import Container from "../UI/Container";
import Row from "../UI/Row";
import Card from "../UI/Card";
import classes from "./style/WeLearning.module.scss";

const initialInformation = [
  {
    direction: "Yuqori talabdagi yo’nalishlar",
    description:
      "Dasturlash sohasida talab darajasi yuqori bolgan yo’nalishlarni biz bilan o’rganing. ",
    imgUrl: "https://i.ibb.co/CMD1dzQ/Static-assets-bro-1.png",
    altTitle: "Static-assets-bro-1",
  },
  {
    direction: "O’zingizga mos ta’lim turini tanlang",
    description:
      "O’zingizga mos tarzdagi online yoki offline trazdagi o’zingizga qulay muhitda ta’lim oling",
    imgUrl: "https://i.ibb.co/k9MHFkN/Taking-notes-bro-1.png",
    altTitle: "Taking-notes-bro-1",
  },
  {
    direction: "Asosiysi Data Sciense",
    description:
      "Bizda siz ilk bor  yurtimizda, faqat “isystem”da Data Sciense boyicha bilim olishinigiz mumkin.",
    imgUrl: "https://i.ibb.co/Vq2dfvB/Data-analysis-bro-1.png",
    altTitle: "Data-analysis-bro-1",
  },
  {
    direction: "Do’stona muhit",
    description:
      "Bizda co-working zonalarimizda jamoamiz mentorlari va do’stlaringiz bilan o’zaro bilimaringizni almashing.",
    imgUrl: "https://i.ibb.co/VpyYFF6/Onboarding-bro-1-1.png",
    altTitle: "Onboarding-bro-1-1",
  },
  {
    direction: "Sertifikatlar bilan taqdirlash",
    description:
      "Kurslarimizni muvofaqiyatli tamomlagano’quvchilarmizni sertifikatlar bilan taqdirlash",
    imgUrl: "https://i.ibb.co/r4P7kzN/Success-factors-bro-1-1.png",
    altTitle: "Success-factors-bro-1-1",
  },
  {
    direction: "Vaqtingizni tejang",
    description:
      "“isystem”da malakali muahasislardan qisqa vaqt davomida bilim oling va karierangizni boshlashga ilk qadamlarnibiz bilan boshlang",
    imgUrl: "https://i.ibb.co/fk21HQK/Business-decisions-bro-1.png",
  },
];

const WeLearning = () => {
  const fetchInformation = () => {
    if (initialInformation.length > 0) {
      return initialInformation.map((item, index) => (
        <Card className={`${classes.informationCard} "card"`} key={index}>
          <div className="d-flex align-items-center flex-column">
            <h2>{item.direction}</h2>
            <p>{item.description}</p>
          </div>
          <img src={item.imgUrl} alt={item.altTitle} />
        </Card>
      ));
    }
  };
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className={"col-xl-12"}>
            <div className={classes.weLearningTitle}>
              <h1>BIZ BILAN IT NI O’RGANING</h1>
            </div>
          </Col>
          <Col className={"col-xl-12"}>
            <div className={classes.informationGrid}>{fetchInformation()}</div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default WeLearning;
