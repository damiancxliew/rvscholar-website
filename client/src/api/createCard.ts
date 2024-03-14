import axios from "axios";
import { API_URL } from "./config";
import { TDeck } from "./getDecks";

export async function createCard(deckId: string, values: any): Promise<any> {
  const response = await axios.post(`${API_URL}/life/${deckId}/cards`, values, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  // const response = await fetch(`${API_URL}/life/${deckId}/cards`, {
  //   method: "POST",
  //   body: JSON.stringify({values}),
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // });  
  console.log(JSON.stringify(response));
  return JSON.stringify(response);
}
