import {
  ADD_TAG,
  REMOVE_PRODUCTS,
  REMOVE_TAG,
  ADD_PRODUCTS,
  OPEN_LOGIN,
  CLOSE_LOGIN,
  OPEN_SIGNUP,
  CLOSE_SIGNUP,
  USER_LOGGED,
  USER_NOT_LOGGED,
  IS_ADMIN,
  ALL_DETAILS,
  LOGOUT,
  TOGGLE_CLICK,
  BUY_PRODUCT,
} from "../actions/actionTypes";

const initialState = {
  tag: {},
  hover: false,
  products: [],
  login: false,
  signup: false,
  userLogged: false,
  isAdminLogged: false,
  details: null,
  previewImage: null,
  collection: null,
  description: null,
  toggleCollection: null,
  buyingProduct: null,
  TagName: null,
};

export default function Tag(state = initialState, action) {
  switch (action.type) {
    case ADD_TAG:
      return {
        ...state,
        hover: true,
        tag: action.tag,
      };
    case REMOVE_TAG:
      return {
        ...state,
        hover: false,
        tag: {},
      };
    case ADD_PRODUCTS:
      return state.products.concat(action.products);
    case REMOVE_PRODUCTS:
      return { products: [] };
    case OPEN_LOGIN:
      return {
        ...state,
        login: true,
        signup: false,
      };
    case CLOSE_LOGIN:
      return {
        ...state,
        login: false,
        signup: false,
      };
    case OPEN_SIGNUP:
      return {
        ...state,
        signup: true,
      };
    case CLOSE_SIGNUP:
      return {
        ...state,
        login: false,
        signup: false,
      };
    case USER_LOGGED:
      return {
        ...state,
        userLogged: true,
        login: false,
        signup: false,
        isAdminLogged: false,
      };
    case USER_NOT_LOGGED:
      return {
        ...state,
        userLogged: false,
        hover: false,
      };
    case IS_ADMIN:
      return {
        ...state,
        isAdminLogged: true,
        login: false,
        signup: false,
        userLogged: false,
      };
    case ALL_DETAILS:
      return {
        ...state,
        details: action.Obj,
        previewImage: action.Image,
        collection: action.collectionName,
        description: action.desc,
      };
    case TOGGLE_CLICK:
      return {
        ...state,
        toggleCollection: action.toggleCollection,
      };
    case BUY_PRODUCT:
      console.log(state.buyingProduct);
      return {
        ...state,
        buyingProduct: action.ID,
        TagName: action.TagName,
      };
    case LOGOUT:
      return {
        tag: {},
        hover: false,
        products: [],
        login: false,
        signup: false,
        userLogged: false,
        isAdminLogged: false,
        details: null,
        previewImage: null,
        collection: null,
        description: null,
        toggleCollection: null,
        buyingProduct: null,
        TagName: null,
      };
    default:
      return state;
  }
}
