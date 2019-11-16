const INITIAL_STATE = {
  users: [],
  posts: []
}

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "RECEIVED_USERS":
      return {
        ...state,
        users: action.payload
      }
      case "RECEIVED_POSTS":
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
