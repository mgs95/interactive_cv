import { ACTION_TYPES } from "../constants/actionTypes";

const app = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.HIDE_ONBOARDING:
      return {
        ...state,
        showOnboarding: false
      };
    default:
      return state;
  }
};

export default app;
