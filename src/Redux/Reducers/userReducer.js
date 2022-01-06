import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    name:'C++',
    age:'1990',
}

export const userReducer = createReducer(initialState,(builder) => {
    builder.addCase('UPDATE_NAME_SUCCESS', (state,action) => {
        state.name = action.payload
    })
    builder.addCase('UPDATE_DOB_SUCCESS', (state,action) => {
        state.age = action.payload
    })
})

export default userReducer