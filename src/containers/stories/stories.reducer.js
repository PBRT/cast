// @flow
import type { StoriesState } from "./stories.type";
import type { Action } from "./stories.actions";

import { fx } from "redux-data-fx";

export const initialState: StoriesState = {
  stories: [],
  error: null,
  loading: false,
  timestamp: Date.now(),
  username: "",
};

type StoriesReducer = (state: StoriesState, action: Action) => StoriesState;
export const stories: StoriesReducer = (
  state: StoriesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "REQUEST_STORIES":
      return fx({ ...state, loading: true }, [
        {
          effect: "fetch",
          url: "stories",
          method: "GET",
          onSuccess: "RECEIVE_STORIES",
          onError: "FAIL_STORIES"
        }
      ]);
    case "RECEIVE_STORIES":
      return {
        ...state,
        stories: action.payload,
        loading: false,
        error: null,
        timestamp: action.timestamp,
      };

    case "FAIL_STORIES":
      return {
        ...state,
        error: "FAIL",
        loading: false
      };
    case "REQUEST_CREATE_STORY":
      return fx({ ...state, loading: true }, [
        {
          effect: "fetch",
          url: "stories",
          method: "post",
          onSuccess: "RECEIVE_CREATE_STORY",
          onError: "FAIL_CREATE_STORY",
          body: action.story
        }
      ]);
    case "RECEIVE_CREATE_STORY":
      return {
        ...state,
        stories: [...(action.payload || []), ...state.stories],
        loading: false,
        error: null,
        timestamp: action.timestamp
      };

    case "FAIL_CREATE_STORY":
      return {
        ...state,
        error: "FAIL",
        loading: false
      };
    default:
      return state;
  }
};
