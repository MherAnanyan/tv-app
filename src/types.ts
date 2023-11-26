export interface IItem {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    Description: string;
    VideoUrl: string;
}

export interface TrendingResponse {
    Featured: IItem | null;
    TrendingNow: IItem[];
}

export interface RootState {
    trendingNow: {
        items: IItem[];
    };
}
