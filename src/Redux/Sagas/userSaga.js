import { call, put, takeEvery, takeLatest, delay } from "redux-saga/effects";

/*Why we use generator function => 
 *redux saga, pauses and resume the execution of function

*/
/*Below function is called worker saga*/
const getUserName = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await res.json();
  console.log(result);
  return result[Math.floor(Math.random() * 10)].name;
};

function* updateDob() {
  try {
    yield delay(5000) //for delaying function
    yield put({ type: "UPDATE_DOB_SUCCESS", payload: '2000' });
  } catch (e) {
    console.log(e);
  }
}
function* fetchUser() {
  try {
    const userName = yield getUserName();
    //below we are dispatching actions and using put keyword for that
    yield put({ type: "UPDATE_NAME_SUCCESS", payload: userName });
    // const user = yield call(Api.fetchUser, action.payload.userId);
    // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    console.log(e);
  }
}

/*
  Starts fetchUser on each dispatched `UPDATE_USER` action.
  Allows concurrent fetches of user. means it'll take every action and every time call the api
*/

/*below given function is called watcher */
function* userSaga() {
  yield takeEvery("UPDATE_NAME", fetchUser);
  yield takeEvery("UPDATE_DOB", updateDob);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

export default userSaga;
