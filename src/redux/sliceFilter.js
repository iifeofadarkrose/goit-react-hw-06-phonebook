import { createSlice } from '@reduxjs/toolkit';

const sliceFilter = createSlice({
    name: 'filter',
    initialState: {
        filter: ''
    },
    reducers: {
        setFilterList(state, action) {
            state.filter = action.payload;

        }
    }
})

export const { setFilterList } = sliceFilter.actions;
export const filterReducer = sliceFilter.reducer;