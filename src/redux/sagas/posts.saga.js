import { takeLatest, put, call } from "redux-saga/effects";

// WATCHER
export default function* requestPostsSaga() {
  console.log("POSTS REQUESTED");
  yield takeLatest("REQUEST_POSTS", receivedPostsSaga);
}

// WORKER
function* receivedPostsSaga() {
  try {
    const payload = yield call(getPosts);
    yield put({ type: "RECEIVED_POSTS", payload: payload });
  } catch (e) {
    yield put({ type: "API_ERROR", payload: e });
  }
}

// FILTERED ASYNC POSTS REQUEST
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
};
