import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createDeck } from "../api/createDeck";
import { deleteDeck } from "../api/deleteDeck";
import { getDecks, TCard, TDeck } from "../api/getDecks";
import "../App.css";
import { Button, Col, Divider, Input, Row, Image } from "antd";
import Title from "antd/es/typography/Title";
import { getImg } from "../utils/utils";
import { getDeck } from "../api/getDeck";
import Paragraph from "antd/es/typography/Paragraph";

function Experience() {
  const [decks, setDecks] = useState<TDeck[]>([]);

  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await getDecks();
      console.log("dd", newDecks);
      setDecks(newDecks);
    }
    fetchDecks();
  }, []);

  return (
    <div className="container">
      <div className="App">
        <Divider style={{ background: "#000" }}></Divider>
        <h1>Words from Seniors</h1>

        {decks.map((deck) => (
          <div key={deck._id}>
            <h1>{deck.title}</h1>
            <Divider style={{ backgroundColor: "#fff" }}></Divider>
            <Row gutter={[16, 24]}>
              {deck.cards.map((card, index) => (
                <React.Fragment key={index}>
                  <Col className="gutter-row" span={8}>
                    <div style={{ background: "#fff", padding: "12px 0" }}>
                      <Image
                        src={getImg(card.image)}
                        alt={`./images/${card.image}`}
                        height={"100%"}
                        width={"90%"}
                      />
                    </div>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <div>
                      <Title font-family="Helvetica Neue" level={3}>
                        {card.name}
                      </Title>
                      <Title level={4}>Course/Interest: {card.interest}</Title>
                      <Paragraph style={{ fontSize: 18 }}>
                        {card.experience}
                      </Paragraph>
                    </div>
                  </Col>
                </React.Fragment>
              ))}
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
