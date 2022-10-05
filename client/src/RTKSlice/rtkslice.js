import { createSlice } from '@reduxjs/toolkit'

const rtkSlice = createSlice({
    name: 'rtkSlice',
    initialState: {
        card:[],
     
    },
    reducers: {
        getAllCard(state,action){
            state.card = action.payload
        },
    }
})

export default rtkSlice.reducer
export const {getAllCard} = rtkSlice.actions