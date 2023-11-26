import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from '../../types';

interface CurrentMovieState {
    currentMovie: IItem | null;
}

const initialState: CurrentMovieState = {
    currentMovie: null,
};

const currentMovieSlice = createSlice({
    name: 'currentMovie',
    initialState,
    reducers: {
        setMovie: (state, action: PayloadAction<IItem>) => {
            state.currentMovie = action.payload;
        },
        clearMovie: (state) => {
            state.currentMovie = null;
        },
    },
});

export const { setMovie, clearMovie } = currentMovieSlice.actions;
export default currentMovieSlice.reducer;
