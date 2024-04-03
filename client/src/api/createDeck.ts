import { doc, updateDoc, getFirestore, query, collection, setDoc } from "firebase/firestore";
import { firebaseApp } from "../../../client/src/api/firebase-config";
import { getDeck } from "./getDeck";

export async function createDeck(title: string) {
  const db = getFirestore(firebaseApp);

  // TODO: perform a check on whether the title exists, if not then add in
  const deck = await getDeck(title)
  if (deck) {
    console.log("Deck already existed", deck)
  } else {
    // creating a document in the collection deck to 
    await setDoc(doc(db, "decks", title), {})

  }

  // const response = await fetch(`${API_URL}/life`, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     title,
  //   }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // return response.json();
}
