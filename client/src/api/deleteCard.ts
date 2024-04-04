import { API_URL } from "./config";
import { TDeck } from "./getDecks";
import { doc, updateDoc, getFirestore, query, collection, getDocs, orderBy, FieldPath, deleteField } from "firebase/firestore";
import { firebaseApp } from "../../../client/src/api/firebase-config";
import { getStorage, ref, deleteObject } from "firebase/storage";

const storage = getStorage();

export async function deleteCard(
  deckId: any,
  cardId: any,
  cardName: string,
){

  // delete database record
  const db = getFirestore(firebaseApp);
  const deckRef = doc(db, 'decks', deckId);

  await updateDoc(deckRef, {
    [cardId]: deleteField()
  });

  // delete picture
  const storageRef = ref(storage, 'pictures/' + cardName);
  deleteObject(storageRef).then(() => {
    // File deleted successfully
    console.log("Deleted file")
  }).catch((error) => {
    // Uh-oh, an error occurred!
    console.log("error")
  });


  // const response = await fetch(`${API_URL}/life/${deckId}/cards/${index}`, {
  //   method: "DELETE",
  // });
  // return response.json();
}
