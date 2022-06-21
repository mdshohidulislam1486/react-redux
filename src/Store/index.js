/* import { configureStore } from '@reduxjs/toolkit' */

import { createStore } from '@reduxjs/toolkit';


const reducerFu = (state ={counter: 0}, action) => {

    //synchronous function
    // we should not mutate the original state  
    if(action.type === 'INC'){
        return {counter:state.counter + 1}
    }if(action.type==='DEC'){
        return {counter:state.counter - 1}
    }
    if(action.type === 'ADD'){
        return {counter:state.counter + action.payload}
    }
    return state;
}

const store = createStore(reducerFu);

export default store;