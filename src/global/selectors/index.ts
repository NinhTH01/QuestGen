import { GlobalState } from "../GlobalState";

export function currentWidth(state: GlobalState): number {
  return state.global.width!;
}
