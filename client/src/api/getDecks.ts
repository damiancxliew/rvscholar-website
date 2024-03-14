import { API_URL } from "./config";

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

export async function getDecks(): Promise<TDeck[]> {
  const response = await fetch(`${API_URL}/life`);
  return response.json();
}
