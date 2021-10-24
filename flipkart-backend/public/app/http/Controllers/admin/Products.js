const mongoose = require("mongoose");
const {
  WatchesForWomenSchema,
  WatchesForMenSchema,
  ShoesForWomenSchema,
  ShoesForMenSchema,
  LaptopsSchema,
  MobilesSchema,
} = require("../../../models/products");

const {
  TopOffersSchema,
  DealsOfTheDaySchema,
} = require("../../../models/Offers.js");

function adminController() {
  return {
    index(req, res) {
      const { details, previewImage, newCollection } = req.body;
      console.log("collection", newCollection);

      if (!details || !previewImage) {
        return res.json({ error: "Product must have Image or details" });
      }
      const newProduct = eval(`${newCollection}Schema`)({
        imageUrl: previewImage,
        details: [details],
      });
      newProduct
        .save()
        .then((res) => {
          return res.json({ success: "Product Placed Successfully" });
        })
        .catch((err) => {
          res.json({ error: "Something went wrong" });
        });
    },
    fetchData(req, res) {
      const { newData } = req.body;
      console.log(newData);
      eval(`${newData}Schema`).find((err, data) => {
        if (data) {
          res.send(data);
        } else {
          console.log(err);
        }
      });
    },
    addToProduct(req, res) {
      const { productID, collectionName } = req.body;
      console.log("offer", productID, collectionName);
      const topOffer = eval(`${collectionName}Schema`)({
        productID,
      });
      topOffer
        .save()
        .then((resP) => {
          res.json({ message: "Successfully added" });
        })
        .catch((err) => console.error(err));
    },
  };
}

module.exports = { adminController };
