import { configureStore } from '@reduxjs/toolkit';
import trendingNowSlice from './slices/trendingNow';
import features from './slices/featured'
import currentMovie from './slices/currentMovie';


export const store = configureStore({
    reducer: {
        trendingNow: trendingNowSlice,
        features: features,
        currentMovie: currentMovie
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: true,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;

