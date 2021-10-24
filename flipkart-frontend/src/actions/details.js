import { ALL_DETAILS } from "./actionTypes";

export function allDetails(obj, Image, collectionName, desc) {
  return {
    type: ALL_DETAILS,
    Obj: obj,
    Image,
    collectionName,
    desc,
  };
}
