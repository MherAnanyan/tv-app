import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IItem } from '../../types';


interface FeaturesState {
    featured: IItem | null;
}

const initialState: FeaturesState = {
    featured: null
};

const features = createSlice({
    name: 'features',
    initialState,
    reducers: {
        setFeatured: (state, action: PayloadAction<IItem>) => {
            state.featured = action.payload;
        },
    },
});

export const { setFeatured } = features.actions;
export default features.reducer;