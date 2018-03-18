import { combineReducers } from "redux-data-fx";

// Reducers
import { stories } from "../containers/stories/stories.reducer.js";

const app = combineReducers({
  stories
});

export default app;
