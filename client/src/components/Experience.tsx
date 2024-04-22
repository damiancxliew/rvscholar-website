// change to firebase
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createDeck } from "../api/createDeck";
import { deleteDeck } from "../api/deleteDeck";
import { getDecks, TCard, TDeck } from "../api/getDecks";
import "../App.css";
import { Button, Col, Divider, Input, Row, Image, Flex } from "antd";
import Title from "antd/es/typography/Title";
import { getImg } from "../utils/utils";
import { getDeck } from "../api/getDeck";
import Paragraph from "antd/es/typography/Paragraph";

function Experience() {
    const [decks, setDecks] = useState<any>([]);
    const notInArray = ["hostel"]; // type name of deck that is not to be included in accessing hostel deck
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initially check if screen size is mobile

    useEffect(() => {
        async function fetchDecks() {
            const newDecks = await getDecks(notInArray);
            newDecks.sort((a: any, b: any) => {
                return a.id - b.id;
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
                <h1
                    style={{
                        fontSize: "2.0rem",
                    }}
                >
                    Words from Seniors
                </h1>

                {decks
                    ? decks.map((deck: any) => (
                          <div key={deck.id}>
                              {deck.id >= currentYear && !currentPrinted ? (
                                  <>
                                      <h1
                                          style={{
                                              fontSize: "1.75vw",
                                          }}
                                      >
                                          Current
                                      </h1>
                                      {(currentPrinted = true)}{" "}
                                      {/* Update the flag if "Current" is printed */}
                                  </>
                              ) : null}
                              {deck.id >= currentYear &&
                              currentPrinted ? null : (
                                  <h1
                                      style={{
                                          fontSize: "1.75rem",
                                      }}
                                  >
                                      Graduated in {deck.id}
                                  </h1>
                              )}
                              <Divider
                                  style={{ backgroundColor: "#fff" }}
                              ></Divider>
                              {Object.entries(deck.data).map(
                                  (card: any, index: any) => (
                                      <React.Fragment key={index}>
                                          {isMobile ? (
                                              // If mobile screen size
                                              <>
                                                  <Row gutter={[16, 24]}>
                                                      <Col span={24}>
                                                          <div
                                                              style={{
                                                                  background:
                                                                      "#fff",
                                                                  padding:
                                                                      "12px 0",
                                                                  textAlign:
                                                                      "center",
                                                              }}
                                                          >
                                                              <Image
                                                                  src={
                                                                      card[1]
                                                                          .imageLink
                                                                  }
                                                                  alt={`Image of ${card[1].name}`}
                                                                  style={{
                                                                      height: "auto",
                                                                      width: "90%",
                                                                  }}
                                                              />
                                                          </div>
                                                      </Col>
                                                  </Row>
                                                  <Row gutter={[16, 24]}>
                                                      <Col span={24}>
                                                          <div>
                                                              <Title
                                                                  level={3}
                                                                  style={{
                                                                      fontSize:
                                                                          "1.0rem",
                                                                      textAlign:
                                                                          "center",
                                                                  }}
                                                              >
                                                                  {card[1].name}
                                                              </Title>
                                                              <Title
                                                                  level={4}
                                                                  style={{
                                                                      fontSize:
                                                                          "0.7rem",
                                                                  }}
                                                              >
                                                                  Course/Interest:{" "}
                                                                  {
                                                                      card[1]
                                                                          .interests
                                                                  }
                                                              </Title>
                                                              <Paragraph
                                                                  style={{
                                                                      fontSize:
                                                                          "0.6rem",
                                                                  }}
                                                              >
                                                                  {
                                                                      card[1]
                                                                          .experience
                                                                  }
                                                              </Paragraph>
                                                          </div>
                                                      </Col>
                                                  </Row>
                                              </>
                                          ) : (
                                              // If laptop screen size
                                              <Row gutter={[16, 24]}>
                                                  <Col
                                                      className="gutter-row"
                                                      span={8}
                                                  >
                                                      <div
                                                          style={{
                                                              background:
                                                                  "#fff",
                                                              padding: "12px 0",
                                                              textAlign:
                                                                  "center",
                                                          }}
                                                      >
                                                          <Image
                                                              src={
                                                                  card[1]
                                                                      .imageLink
                                                              }
                                                              alt={`Image of ${card[1].name}`}
                                                              style={{
                                                                  height: "auto",
                                                                  width: "90%",
                                                              }}
                                                          />
                                                      </div>
                                                  </Col>
                                                  <Col
                                                      className="gutter-row"
                                                      span={16}
                                                  >
                                                      <div>
                                                          <Title
                                                              level={3}
                                                              style={{
                                                                  fontSize:
                                                                      "1.75vw",
                                                              }}
                                                          >
                                                              {card[1].name}
                                                          </Title>
                                                          <Title
                                                              level={4}
                                                              style={{
                                                                  fontSize:
                                                                      "1.2vw",
                                                              }}
                                                          >
                                                              Course/Interest:{" "}
                                                              {
                                                                  card[1]
                                                                      .interests
                                                              }
                                                          </Title>
                                                          <Paragraph
                                                              style={{
                                                                  fontSize:
                                                                      "1.05vw",
                                                              }}
                                                          >
                                                              {
                                                                  card[1]
                                                                      .experience
                                                              }
                                                          </Paragraph>
                                                      </div>
                                                  </Col>
                                              </Row>
                                          )}
                                      </React.Fragment>
                                  )
                              )}
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
}

export default Experience;
