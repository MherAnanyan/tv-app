import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from '../../types';


interface TrendingState {
    trending: IItem[];
}

const initialState: TrendingState = {
    trending: [],
};

const trendingSlice = createSlice({
    name: 'trending',
    initialState,
    reducers: {
        setTrending: (state, action: PayloadAction<IItem[]>) => {
            state.trending = action.payload;
        },
    },
});

export const { setTrending } = trendingSlice.actions;
export default trendingSlice.reducer;
