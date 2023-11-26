import { setFeatured } from './store/slices/featured';
import { setTrending } from './store/slices/trendingNow';
import { IItem } from './types';

export const fetchDataAndDispatch = async (dispatch: any) => {
    try {
        const data = await new Promise<any>((resolve) => {
            setTimeout(async () => {
                const fetchedData = await import("./data.json")
                resolve(fetchedData);
            }, 0);
        });
        dispatch(setFeatured(data?.Featured));
        dispatch(setTrending(data.TendingNow.slice(0, 50)));

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }
};
