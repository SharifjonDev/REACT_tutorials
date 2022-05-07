import React from "react";
import { Container, Row, Col, Card } from "reactstrap";

import "../HomeStyle/_learncontent.scss";

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

function LearnContent() {
  return (
    <section>
      <Container>
        <Row>
          <Col xl="12">
            <h1 className="learn__title">BIZ BILAN IT NI O’RGANING</h1>
          </Col>
          <Col xl="12">
            <div className="learn__grid__system">
              {initialInformation.map((item, index) => (
                <Card className="learn__cards" key={index}>
                  <div className="d-flex align-items-center flex-column">
                    <h2>{item.direction}</h2>
                    <p>{item.description}</p>
                  </div>
                  <img src={item.imgUrl} alt={item.altTitle} />
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LearnContent;
