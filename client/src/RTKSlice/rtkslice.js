import { createSlice } from '@reduxjs/toolkit'

const rtkSlice = createSlice({
    name: 'rtkSlice',
    initialState: {
        card:[],
        cardsArray:[],
        
    },
    reducers: {
        getAllCard(state,action){
            state.card = action.payload
            state.cardsArray = state.card;
            console.log('state.card getAllCard',state.card.filter(el => el.category === getFilterCard()));
            console.log('action.payload getAllCard',action.payload); //!
            console.log('state.cardsArray',state.cardsArray);
           
        },
        
        getFilterCard(state,action){

            state.str = action.payload

            console.log('state',state);
            console.log('action.payload getFilterCard',action.payload);
            console.log('state.str',state.str);

        },
    }
})

export default rtkSlice.reducer
export const {getAllCard,getFilterCard} = rtkSlice.actions