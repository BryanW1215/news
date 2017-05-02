import {FETCH, SORT_BY_DATE, SORT_BY_TITLE, SELECT, UNSELECT} from '../actions/index';
import * as _ from 'lodash';
import {transformArticles} from '../transformations/articles';
const INITIAL_STATE = {all: [], selected: null, sort: ''};

export default function (state = INITIAL_STATE, action) {
    if(!action){
        return state;
    }
    switch (action.type) {
        case FETCH:
            return {...state, sort: 'DATE', all:  _.sortBy(transformArticles(action.payload.data.articles), 'publishedAtTimeStamp')};
        case SORT_BY_TITLE:
            return {...state, sort: 'TITLE', all:  _.sortBy(_.clone(state.all), 'title')};
        case SORT_BY_DATE:
            return {...state, sort: 'DATE', all:  _.sortBy(_.clone(state.all), 'publishedAtTimeStamp')};
        case SELECT:
            return {...state, selected: action.payload};
        case UNSELECT:
            return {...state, selected: null};


    }
    return state
}