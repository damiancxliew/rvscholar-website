import { API_URL } from "./config";
import { TDeck } from "./getDecks";

export async function getDeck(deckId: string): Promise<TDeck> {
  const response = await fetch(`${API_URL}/life/${deckId}`);
  return response.json();
}
