import { API_URL } from "./config";
import { doc, updateDoc, getFirestore, query, collection, getDocs, deleteDoc } from "firebase/firestore";
import { firebaseApp } from "../../../client/src/api/firebase-config";
import { getDeck } from "./getDeck";
import { deleteCard } from "./deleteCard";

type cardType = any

export async function deleteDeck(deckId: string) {
  const db = getFirestore(firebaseApp);

  // delete deck if exists
  const deck = await getDeck(deckId)
  if (deck) {
    console.log("deck", deck.data)
    Object.entries(deck.data).forEach((card:cardType) => {
      deleteCard(deckId, card[0], card[1]?.name)
    })
    await deleteDoc(doc(db, "decks", deckId));
  } else {
    console.log("Deck not exists")
  }
  
  
  // await fetch(`${API_URL}/life/${deckId}`, {
  //   method: "DELETE",
  // });
}
