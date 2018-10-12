// @flow
import type { StoryState } from "./stories.type";
import type { Action } from "./story.actions";

import { fx } from "redux-data-fx";

export const initialStoryState: StoryState = {
    story: [],
    error: null,
    loading: false,
    timestamp: Date.now(),
  };


  type StoryReducer = (state: StoryState, action: Action) => StoryState;
  export const story: StoryReducer = (
    state: StoryState = initialStoryState,
    action: Action
  ) => {
    switch (action.type) {

      case "REQUEST_ONE_STORY":
      return fx({ ...state, loading: true }, [
        {
          effect: "fetch",
          url: "stories/" + action.id,
          method: "GET",
          onSuccess: "RECEIVE_ONE_STORY",
          onError: "FAIL_STORY"
        }
      ]);
    case "RECEIVE_ONE_STORY":
      return {
        story: action.payload,
        loading: false,
        error: null,
        timestamp: action.timestamp,
      };

    case "FAIL_STORY":
      return {
        ...state,
        error: "FAIL",
        loading: false
      };

    default:
      return state;
  }
};