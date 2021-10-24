import { TOGGLE_CLICK } from "./actionTypes";

export function toggleClick(toggleCollection) {
  return {
    type: TOGGLE_CLICK,
    toggleCollection,
  };
}
