// @flow
import type { Stories } from "./stories.type";

export type REQUEST_STORIES = "REQUEST_STORIES";
export type RECEIVE_STORIES = "RECEIVE_STORIES";
export type FAIL_STORIES = "FAIL_STORIES";

export type REQUEST_CREATE_STORY = "REQUEST_CREATE_STORY";
export type RECEIVE_CREATE_STORY = "RECEIVE_CREATE_STORY";
export type FAIL_CREATE_STORY = "FAIL_CREATE_STORY";

export type REQUEST_DELETE_STORY = "REQUEST_DELETE_STORY";
export type RECEIVE_DELETE_STORY = "RECEIVE_DELETE_STORY";
export type FAIL_DELETE_STORY = "FAIL_DELETE_STORY";


export type Action = {
  type:
    | REQUEST_STORIES
    | RECEIVE_STORIES
    | FAIL_STORIES
    | REQUEST_CREATE_STORY
    | RECEIVE_CREATE_STORY
    | FAIL_CREATE_STORY
    | REQUEST_DELETE_STORY
    | RECEIVE_DELETE_STORY
    | FAIL_DELETE_STORY,
  payload?: Stories,
  story?: Object,
  timestamp?: number,
  title?: string,
};

type RequestStories = () => Action;
export const requestStories: RequestStories = (dateOrder: String) => ({
  type: "REQUEST_STORIES",
  dateOrder
});

type CreateStory = (story: Object) => Action;
export const createStory: CreateStory = (story: Object) => ({
  type: "REQUEST_CREATE_STORY",
  story
});

type DeleteStory = (title: String) => Action;
export const deleteStory: DeleteStory = (title: String) => ({
  type: "REQUEST_DELETE_STORY",
  title
});