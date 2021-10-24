const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const collectionSchema = new Schema({
  imageUrl: { type: String, unique: true },
  details: { type: [], required: true },
});
const MobilesSchema = mongoose.model("Mobiles", collectionSchema);
const LaptopsSchema = mongoose.model("Laptops", collectionSchema);
const ShoesForMenSchema = mongoose.model("Shoes for Men", collectionSchema);
const ShoesForWomenSchema = mongoose.model("Shoes for Women", collectionSchema);
const WatchesForMenSchema = mongoose.model("Watches For Men", collectionSchema);
const WatchesForWomenSchema = mongoose.model(
  "Watches For Women",
  collectionSchema
);

module.exports = {
  MobilesSchema,
  LaptopsSchema,
  ShoesForMenSchema,
  ShoesForWomenSchema,
  WatchesForMenSchema,
  WatchesForWomenSchema,
};
