import * as types from "./../constants/ActionTypes";
import * as Message from "./../constants/Message";
var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      console.log(action);
      return state;
    default:
      return [...state];
  }
};

export default message;
