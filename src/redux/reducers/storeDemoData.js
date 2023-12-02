import { DUMMY_DATA } from "../reducersKeys";
const initialState = { userData: null, token: null };

export default function reducer(state = initialState, action) {
  console.log(action, "action.ssssssstypesdfsdfsdfsdf");

  switch (action.type) {
    case DUMMY_DATA: {
      return { ...state, userData: action.payload };
    }

    default:
      return { ...state };
  }
}
