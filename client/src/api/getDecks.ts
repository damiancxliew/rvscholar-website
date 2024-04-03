import { doc, updateDoc, getFirestore, query, collection, getDocs, orderBy, FieldPath, where } from "firebase/firestore";
import { firebaseApp } from "../../../client/src/api/firebase-config";

export type TCard = {
  name: string;
  interest: string;
  graduate_year: string;
  experience: string;
  image: string;
}

export type TDeck = {
  title: string;
  cards: TCard[];
  _id: string;
};

export async function getDecks(notInArray:string[]=[]): Promise<TDeck[]> {

  const db = getFirestore(firebaseApp);

  // obtain all the available decks
  const res:any[] = []
  const q = query(collection(db, "decks"), where("__name__", "not-in", notInArray))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc:any) => {
      // doc.data() is never undefined for query doc snapshots
      res.push({
        id: doc.id, 
        data: doc.data()
      })
      // console.log(doc.data())
  })
  return res

  // const response = await fetch(`${API_URL}/life`);
  // return response.json();
}
