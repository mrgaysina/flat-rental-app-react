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
            console.log('action.payload getAllCard',action.payload); //!
            
        },
        
        getFilterCard(state,action){
        // state.card = state.allCards.filter(el => el.category === action.payload)
        state.card = action.payload
        },
    }
})

export default rtkSlice.reducer
export const {getAllCard,getFilterCard} = rtkSlice.actions