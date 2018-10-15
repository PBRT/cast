import { combineReducers } from "redux-data-fx";

// Reducers
import { stories } from "../containers/stories/stories.reducer";
import { story } from "../containers/story/story.reducer";

const app = combineReducers({
  stories,
  story
});

export default app;
