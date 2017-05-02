import axios from 'axios';
export const FETCH = 'FETCH_ANNOUNCEMENTS';
export const SORT_BY_TITLE = 'SORT_BY_TITLE';
export const SORT_BY_DATE = 'SORT_BY_DATE';
export const SELECT = 'SELECT_ANNOUNCEMENTS';
export const UNSELECT = 'UNSELECT_ANNOUNCEMENTS';
export const URL = "https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=942e59e0a3734915b7e86196ddd4a959";



export function fetch() {
    const request = axios.get(URL);
    return {
        type: FETCH,
        payload: request
    };
}
export function sortByTitle() {
    return {
        type: SORT_BY_TITLE
    };
}
export function sortByDate() {
    return {
        type: SORT_BY_DATE
    };
}
export function select(article) {
    return {
        type: SELECT,
        payload: article
    };
}
export function unselect() {
    return {type: UNSELECT}
}
