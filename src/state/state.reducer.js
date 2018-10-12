import { combineReducers } from "redux-data-fx";

// Reducers
import { stories } from "../containers/stories/stories.reducer.js";
import { story } from "../containers/stories/story.reducer.js";

const app = combineReducers({
  stories,
  story
});

export default app;
