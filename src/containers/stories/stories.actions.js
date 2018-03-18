// @flow
import type { Stories } from "./stories.type";

export type REQUEST_STORIES = "REQUEST_STORIES";
export type RECEIVE_STORIES = "RECEIVE_STORIES";
export type FAIL_STORIES = "FAIL_STORIES";

export type Action = {
  type: REQUEST_STORIES | RECEIVE_STORIES | FAIL_STORIES,
  payload?: Stories,
  timestamp?: number
};

type RequestStories = () => Action;
export const requestStories: RequestStories = () => ({
  type: "REQUEST_STORIES"
});
