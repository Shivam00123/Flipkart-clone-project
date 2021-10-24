import { ADD_PRODUCTS, BUY_PRODUCT, REMOVE_PRODUCTS } from "./actionTypes";

export function addProducts(products) {
  console.log("action", products);
  return {
    type: ADD_PRODUCTS,
    products,
  };
}

export function removeProducts() {
  return {
    type: REMOVE_PRODUCTS,
  };
}

export function buyProduct(ID, TagName) {
  return {
    type: BUY_PRODUCT,
    ID,
    TagName,
  };
}
