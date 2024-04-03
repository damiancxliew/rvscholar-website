import { API_URL } from "./config";
import { doc, updateDoc, getFirestore, query, collection, getDocs, deleteDoc } from "firebase/firestore";
import { firebaseApp } from "../../../client/src/api/firebase-config";
import { getDeck } from "./getDeck";

export async function deleteDeck(deckId: string) {
  const db = getFirestore(firebaseApp);

  // TODO: perform a check on whether the title exists, if not then add in
  const deck = await getDeck(deckId)
  if (deck) {
    await deleteDoc(doc(db, "decks", deckId));
  } else {
    console.log("Deck not exists")
  }
  
  
  // await fetch(`${API_URL}/life/${deckId}`, {
  //   method: "DELETE",
  // });
}
