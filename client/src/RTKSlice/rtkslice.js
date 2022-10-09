import { createSlice } from '@reduxjs/toolkit'

const rtkSlice = createSlice({
    name: 'rtkSlice',
    initialState: {
        card:[],
        allCards:[],
    },
    reducers: {
        getAllCard(state,action){
            state.card = action.payload
            state.allCards = action.payload
        },
        
        getFilterCard(state,action){
        state.card = action.payload
        },
    }
})

export default rtkSlice.reducer
export const {getAllCard,getFilterCard} = rtkSlice.actions