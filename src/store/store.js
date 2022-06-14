import { createSlice } from '@reduxjs/toolkit';


const stateSlice = createSlice({
  name: 'loggedin',
  initialState: {
      loggedin:false,
      token:"",
      items:null,  },
  reducers: {
    setState(state,action) {
      state.loggedin = action.payload;
    },
    setToken(state,action){
      state.token = action.payload;
    },
    setItems(state,action){
      state.items=action.payload
    },
  },
});

export const stateActions = stateSlice.actions;

export default stateSlice.reducer;