import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createDeck } from "../api/createDeck";
import { deleteDeck } from "../api/deleteDeck";
import { getDecks, TDeck } from "../api/getDecks";
import "../App.css";
import { Button, Divider, Input } from "antd";

function Life() {
  const [decks, setDecks] = useState<TDeck[]>([]);
  const [title, setTitle] = useState("");

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    const deck = await createDeck(title);
    setDecks([...decks, deck]);
    setTitle("");
  }

  async function handleDeleteDeck(deckId: string) {
    await deleteDeck(deckId);
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }

  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await getDecks();
      setDecks(newDecks);
    }
    fetchDecks();
  }, []);
  

  return (
    <div className="container">
      <div className="App">
        <Divider style={{ background: "#000" }}></Divider>
        <h1>Words from seniors</h1>

        <ul className="decks">
          {decks.map((deck) => (
            <li key={deck._id}>
              <Button onClick={() => handleDeleteDeck(deck._id)}>X</Button>

              <Link to={`${deck._id}`}>{deck.title}</Link>
            </li>
          ))}
        </ul>
        <form onSubmit={handleCreateDeck}>
          <label htmlFor="deck-title" >Graduate year</label>
          <Input
            id="deck-title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
          <Button htmlType="submit">Create Batch</Button>
        </form>
      </div>
    </div>
  );
}

export default Life;
