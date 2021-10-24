const {
  TopOffersSchema,
  DealsOfTheDaySchema,
  getReference,
} = require("../../models/Offers");

function offerController() {
  return {
    // fetchOffer(req, res) {
    //
    //   TopOffersSchema.find({})
    //     .populate("productID")
    //     .exec((err, data) => {
    //       return res.json({ message: messages, role: role, allData: data });
    //     });
    // },
    fetchOffer(req, res) {
      const messages = req.message;
      const role = req.role;
      return res.json({ message: messages, role: role });
    },
  };
}

module.exports = { offerController };
