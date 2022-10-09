import { createSlice } from '@reduxjs/toolkit'

const rtkSlice = createSlice({
    name: 'rtkSlice',
    initialState: {
        card:[],
        allCards:[],
        user:{}
    },
    reducers: {
        getAllCard(state,action){
            state.card = action.payload
            state.allCards = action.payload

        },

        getFilterCard(state,action){
        state.card = action.payload
        },

        getUser(state,action){
            state.user = action.payload
            console.log('action.payload user',action.payload); //!
            
        },
    }
})

export default rtkSlice.reducer
export const {getAllCard,getFilterCard, getUser} = rtkSlice.actions