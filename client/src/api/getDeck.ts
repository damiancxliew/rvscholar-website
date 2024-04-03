import { getDecks } from "./getDecks";

export async function getDeck(deckId: string) {

  const decks:any[] = await getDecks()

  for (let deck of decks) {
    if (deck.id == deckId) {
      return deck
    }
  }

  // const response = await fetch(`${API_URL}/life/${deckId}`);
  // return response.json();
}
