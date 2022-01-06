import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    photoList: []
}

export const photoReducer = createReducer(initialState,(builder) => {
    builder.addCase('GET_PHOTO_SUCCESS', (state,action) => {
        console.log(action);
        state.photoList = action.payload
    })
})