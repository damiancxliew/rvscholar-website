import { Request, Response } from "express";
import Deck from "../models/Deck";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../client/src/api/firebase-config";

export async function createCardForDeckController(req: Request, res: Response) {
  // const imagename = req.file?.filename;
  // const deck = await Deck.findById(deckId);
  // if (!deck) return res.status(400).send("no deck of this id exists");
  // // console.log(req.body.class);
  // deck.cards.push({
    //   name: req.body.name,
    //   interest: req.body.interest,
    //   graduate_year: req.body.graduate_year,
    //   experience: req.body.experience,
    //   image: imagename,
    // });
    // await deck.save();
    
    const db = getFirestore(firebaseApp);
    const deckId = req.params.deckId;

  // upload the phhoto of the person to firebase storage

  // function to generate the cardId
  function generateCardId(name:string){
    let res = name.replace(" ", "").toLowerCase()
    return res
  }

  // create a new field in the corresponding deck(document) in firestore
  const deckRef = doc(db, "decks", deckId)
  const cardId = generateCardId(req.body.name)

  await updateDoc(deckRef, {
    [cardId]: {
        name: req.body.name,
        interests: req.body.interest,
        graduateYear: req.body.graduate_year,
        experience: req.body.experience,
    }
  })

  // res.json(deck);
}
