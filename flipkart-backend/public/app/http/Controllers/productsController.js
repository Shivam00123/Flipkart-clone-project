const {
  TopOffersSchema,
  DealsOfTheDaySchema,
  getReference,
} = require("../../models/Offers");

function productsController() {
  return {
    fetchProducts(req, res) {
      const coll = req.params.collection;
      const collection = coll.slice(1);
      getReference("Laptops");
      eval(`${collection}Schema`)
        .find({})
        .populate("productID")
        .exec((err, data) => {
          // console.log(data);
          return res.json({ data });
        });
    },
    buyProducts(req, res) {
      const ID = req.params.id.slice(1);
      const Tag = req.params.Tag.slice(1);
      console.log(ID, Tag);
      eval(`${Tag}Schema`)
        .find({ productID: ID })
        .populate("productID")
        .exec((err, data) => {
          return res.json({ data });
        });
    },
  };
}

module.exports = { productsController };
