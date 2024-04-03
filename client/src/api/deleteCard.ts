import { API_URL } from "./config";
import { TDeck } from "./getDecks";
import { doc, updateDoc, getFirestore, query, collection, getDocs, orderBy, FieldPath, deleteField } from "firebase/firestore";
import { firebaseApp } from "../../../client/src/api/firebase-config";

export async function deleteCard(
  deckId: any,
  cardId: any 
){

  const db = getFirestore(firebaseApp);
  const deckRef = doc(db, 'decks', deckId);

  await updateDoc(deckRef, {
    [cardId]: deleteField()
  });


  // const response = await fetch(`${API_URL}/life/${deckId}/cards/${index}`, {
  //   method: "DELETE",
  // });
  // return response.json();
}
