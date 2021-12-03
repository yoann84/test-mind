import {itemType} from './../../screens/Search';
import {createSlice} from '@reduxjs/toolkit';

type initialStateType = {
  favoritePeople: itemType[];
};

const initialState: initialStateType = {
  favoritePeople: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    initializeValue: (state, {payload}) => {
      state.favoritePeople = payload;
    },
    addOrdelete: (state, {payload}) => {
      if (
        state.favoritePeople.find((item: itemType) => item['id'] === payload.id)
      ) {
        state.favoritePeople = state.favoritePeople.filter(
          (e: itemType) => e['id'] !== payload.id,
        );
      } else {
        state.favoritePeople = [...state.favoritePeople, payload];
      }
    },
  },
});

// selectors
export const selectId = state => {
  let array = [];
  for (let item of state.favorite.favoritePeople) {
    array.push(item['id']);
  }
  return array;
};

// actions
export const {addOrdelete, initializeValue} = favoriteSlice.actions;

export default favoriteSlice.reducer;
