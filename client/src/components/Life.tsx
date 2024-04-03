// change to firebase here
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createDeck } from "../api/createDeck";
import { deleteDeck } from "../api/deleteDeck";
import { getDecks, TDeck } from "../api/getDecks";
import "../App.css";
import { Button, Divider, Input } from "antd";

function Life() {
  const [decks, setDecks] = useState<any>([]);
  const [title, setTitle] = useState("");
  const notInArray = ['hostel']   // type name of deck that is not to be included in accessing hostel deck

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    await createDeck(title);
    setDecks(await getDecks(notInArray));
    setTitle("");
  }

  async function handleDeleteDeck(deckId: string) {
    await deleteDeck(deckId);
    setDecks(await getDecks(notInArray));
  }

  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await getDecks(notInArray);
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
          {decks.map((deck:any) => (
            <li key={deck.id}>
              <Button onClick={() => handleDeleteDeck(deck.id)}>X</Button>

              <Link to={`${deck.id}`}>{deck.id}</Link>
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
