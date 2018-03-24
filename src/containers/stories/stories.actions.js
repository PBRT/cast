// @flow
import type { Stories } from "./stories.type";

export type REQUEST_STORIES = "REQUEST_STORIES";
export type RECEIVE_STORIES = "RECEIVE_STORIES";
export type FAIL_STORIES = "FAIL_STORIES";

export type REQUEST_CREATE_STORY = "REQUEST_CREATE_STORY";
export type RECEIVE_CREATE_STORY = "RECEIVE_CREATE_STORY";
export type FAIL_CREATE_STORY = "FAIL_CREATE_STORY";

export type Action = {
  type:
    | REQUEST_STORIES
    | RECEIVE_STORIES
    | FAIL_STORIES
    | REQUEST_CREATE_STORY
    | RECEIVE_CREATE_STORY
    | FAIL_CREATE_STORY,
  payload?: Stories,
  story?: Object,
  timestamp?: number
};

type RequestStories = () => Action;
export const requestStories: RequestStories = () => ({
  type: "REQUEST_STORIES"
});

type CreateStory = (story: Object) => Action;
export const createStory: CreateStory = (story: Object) => ({
  type: "REQUEST_CREATE_STORY",
  story
});
