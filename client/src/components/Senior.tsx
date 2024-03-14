import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TDeck } from "../api/getDecks";
import { getDeck } from "../api/getDeck";
import { Image, Divider, Row, Col } from "antd";
import "./Deck.css";
import { TCard } from "../api/getDecks";
import { getImg } from "../utils/utils";
import Title from "antd/es/typography/Title";

export default function Senior() {
  const [deck, setDeck] = useState<TDeck | undefined>();
  const [cards, setCards] = useState<Array<TCard>>([]);
  // const [text, setText] = useState("");
  const { deckId } = useParams();

  useEffect(() => {
    async function fetchDeck() {
      if (!deckId) return;
      const newDeck = await getDeck(deckId);
      setDeck(newDeck);
      setCards(newDeck.cards);
    }
    fetchDeck();
  }, [deckId]);

  const style: React.CSSProperties = {
    background: "#fff",
    padding: "8px 0",
  };

  return (
    <div className="Deck">
      <Divider style={{ background: "#000" }}></Divider>
      <h1>{deck?.title}</h1>
      <Row gutter={[16, 24]}>
        {cards.map((card, index) => (
          <>
            <Col className="gutter-row" span={12}>
              <div style={style}>
                <Image
                  src={getImg(card.image)}
                  alt={`./images/${card.image}`}
                  height={500}
                  width={400}
                />
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div>
                <Title font-family="Helvetica Neue" level={3}>{card.name}</Title>
                {card.interest}
                {card.experience}
              </div>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
}
