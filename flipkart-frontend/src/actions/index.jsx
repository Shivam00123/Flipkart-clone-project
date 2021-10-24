import { ADD_TAG, REMOVE_TAG } from "./actionTypes";

export function addTag(tag) {
  return {
    type: ADD_TAG,
    tag,
  };
}

export function removeTag() {
  return {
    type: REMOVE_TAG,
  };
}
