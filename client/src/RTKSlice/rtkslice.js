import { createSlice } from '@reduxjs/toolkit'

const rtkSlice = createSlice({
    name: 'rtkSlice',
    initialState: {
        card:[],
        allCards:[],
        user:{},
        points:[],
        coordinates:[],
        costs:[]
        
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

        getUser(state,action){
            state.user = action.payload
            console.log('action.payload user',action.payload); //!
            
        },

        getPoints(state,action) {
            state.points = action.payload
            console.log('action.payload points',action.payload);
        },

        getCoordinates(state,action) {
            state.coordinates = action.payload
            console.log('action.payload coordinates',action.payload);
        },

        getCost(state,action) {
            state.costs = action.payload
            console.log('action.payload coordinates',action.payload);
        }
    }
})

export default rtkSlice.reducer
export const {getAllCard,getFilterCard, getUser, getPoints, getCoordinates, getCost} = rtkSlice.actions