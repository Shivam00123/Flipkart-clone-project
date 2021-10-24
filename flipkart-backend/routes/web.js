const {
  adminController,
} = require("../public/app/http/Controllers/admin/Products");
const authController = require("../public/app/http/Controllers/authController");
const {
  validation,
} = require("../public/app/http/middlewares/cookieValidation");

const {
  offerController,
} = require("../public/app/http/Controllers/OffersController");

const {
  productsController,
} = require("../public/app/http/Controllers/productsController");

function initRoutes(app) {
  app.get("/", validation, offerController().fetchOffer);

  //Post signup
  app.post("/signup", authController().signUp);
  app.post("/login", authController().login);
  app.get("/logout", authController().logout);

  //Products Route
  app.post("/admin/addProduct", adminController().index);
  app.post("/admin/fetch/data", adminController().fetchData);

  //Offerd Route
  app.post("/admin/addProductToOffer", adminController().addToProduct);

  //fetch products
  app.get("/fetch/products:collection", productsController().fetchProducts);
  app.get("/fetch/buyProduct/:Tag/:id", productsController().buyProducts);
}

module.exports = initRoutes;
