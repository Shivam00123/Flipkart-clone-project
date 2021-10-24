const mongoose = require("mongoose");

let reference = null;
function getReference(reff) {
  reference = reff;
  console.log("before", reference);
}

const Schema = mongoose.Schema;

const ToffersSchema = new Schema(
  {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mobiles",
      required: true,
    },
  },
  { timeStamps: true }
);
const DealsOfTheDay = new Schema(
  {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Laptops",
      required: true,
    },
  },
  { timeStamps: true }
);
console.log("reference", reference);
const TopOffersSchema = mongoose.model("Top Offers", ToffersSchema);
const DealsOfTheDaySchema = mongoose.model("DealsOfTheDay", DealsOfTheDay);
// const BestPhonesSchema = mongoose.model("BestPhones", offersSchema);
module.exports = {
  TopOffersSchema,
  DealsOfTheDaySchema,
  getReference,
};
