import { combineReducers } from 'redux';
import featuredSlice from './slices/featured';
import trendingNowSlice from './slices/trendingNow';
import currentmovie from './slices/currentMovie';

const rootReducer = combineReducers({
    features: () => featuredSlice,
    trendingNowSlice: () => trendingNowSlice,
    currentmovie: () => currentmovie
});

export default rootReducer;
