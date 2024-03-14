import { Request, Response } from "express";
import Deck from "../models/Deck";
export async function createCardForDeckController(req: Request, res: Response) {
  const imagename = req.file?.filename;
  const deckId = req.params.deckId;
  const deck = await Deck.findById(deckId);
  if (!deck) return res.status(400).send("no deck of this id exists");
  // console.log(req.body.class);
  deck.cards.push({
    name: req.body.name,
    interest: req.body.interest,
    graduate_year: req.body.graduate_year,
    experience: req.body.experience,
    image: imagename,
  });
  await deck.save();
  res.json(deck);
}
