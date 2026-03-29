import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Article {
    id: bigint;
    title: string;
    source: string;
    publishedAt: string;
    author: string;
    summary: string;
    imageUrl: string;
    isFeatured: boolean;
    isEditorPick: boolean;
    category: string;
    isTrending: boolean;
}
export interface backendInterface {
    getAllArticles(): Promise<Array<Article>>;
    getArticlesByCategory(category: string): Promise<Array<Article>>;
    getEditorPicks(): Promise<Array<Article>>;
    getFeaturedArticles(): Promise<Array<Article>>;
    getTrendingArticles(): Promise<Array<Article>>;
    searchArticles(searchText: string): Promise<Array<Article>>;
}
