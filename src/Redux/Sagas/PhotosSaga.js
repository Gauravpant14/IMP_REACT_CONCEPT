import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'


const fetchPhotos = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const result = await res.json()
    const requiredResult = result.slice(0,100)
    return requiredResult
 }

 
function* getPhoto(action) {
    try {
      const userPhots =  yield call(fetchPhotos)
      yield put({type:"GET_PHOTO_SUCCESS" , payload:userPhots})
 
    } catch (e) {
       console.log(e)
    }
 }


function* photosSaga() {
    yield takeEvery("GET_PHOTO", getPhoto);
}

export default photosSaga