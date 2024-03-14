import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const DeckSchema = new Schema({
  title: String,
  cards: [
    {name: String, 
      interest: String, 
      graduate_year: String, 
      experience: String, 
      image: String
    }],
});

const DeckModel = mongoose.model("Deck", DeckSchema);

export default DeckModel;
