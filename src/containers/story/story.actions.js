// @flow
import type { Story } from "../stories/stories.type";

export type REQUEST_ONE_STORY = "REQUEST_ONE_STORY";
export type RECEIVE_ONE_STORY = "RECEIVE_ONE_STORY";
export type FAIL_STORY = "FAIL_STORY";

export type REQUEST_DELETE_STORY = "REQUEST_DELETE_STORY";
export type RECEIVE_DELETE_STORY = "RECEIVE_DELETE_STORY";
export type FAIL_DELETE_STORY = "FAIL_DELETE_STORY";

export type Action = {
    type:
      | REQUEST_ONE_STORY
      | RECEIVE_ONE_STORY
      | FAIL_STORY
      | REQUEST_DELETE_STORY
      | RECEIVE_DELETE_STORY
      | FAIL_DELETE_STORY,
    payload?: Story,
    story?: Object,
    timestamp?: number,
    title?: string,
    id?: number,
  };


  type RequestStory = (id: Number) => Action;
  export const requestStory: RequestStory = (id: Number) => ({
    type: "REQUEST_ONE_STORY",
    id
  });

type DeleteStory = (id: Number) => Action;
export const deleteStory: DeleteStory = (id: Number) => ({
  type: "REQUEST_DELETE_STORY",
  id
});