// change to firebase
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
  const [decks, setDecks] = useState<any>([]);
  const notInArray = ['hostel']   // type name of deck that is not to be included in accessing hostel deck

  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await getDecks(notInArray);
      // console.log("dd", newDecks);
      console.log("Test 2", newDecks)
      newDecks.sort((a:any, b:any) => {
        return (a.id - b.id)
      });
      setDecks(newDecks);
    }
    fetchDecks();
  }, []);

  // console.log("initial decks", decks[1]?.data)
  const date = new Date();
  const currentYear = date.getFullYear();
  let currentPrinted = false;
  

  return (
    <div className="container">
      <div className="App">
        <Divider style={{ background: "#000" }}></Divider>
        <h1>Words from Seniors</h1>

        {decks ? decks.map((deck:any) => (
          <div key={deck.id}>
          {deck.id >= currentYear && !currentPrinted ? (
              <>
                  <h1>Current</h1>
                  {currentPrinted = true} {/* Update the flag if "Current" is printed */}
              </>
          ) : null}
          {deck.id >= currentYear && currentPrinted ? null : <h1>Graduated in {deck.id}</h1>}
            <Divider style={{ backgroundColor: "#fff" }}></Divider>
            <Row gutter={[16, 24]}>
              {Object.entries(deck.data).map((card:any, index:any) => (
                <React.Fragment key={index}>
                  <Col className="gutter-row" span={8}>
                    <div style={{ background: "#fff", padding: "12px 0" }}>
                      <Image
                        src={card[1].imageLink}
                        alt={`Image of ${card[1].name}`}
                        height={"100%"}
                        width={"90%"}
                      />
                    </div>
                  </Col>
                  <Col className="gutter-row" span={14}>
                    <div>
                      <Title font-family="Helvetica Neue" level={3}>
                        {card[1].name}
                      </Title>
                      <Title level={4}>Course/Interest: {card[1].interests}</Title>
                      <Paragraph style={{ fontSize: 18 }}>
                        {card[1].experience}
                      </Paragraph>
                    </div>
                  </Col>
                </React.Fragment>
              ))}
            </Row>
          </div>
        )) : null}
      </div>
    </div>
  );
}

export default Experience;
