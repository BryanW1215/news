import {combineReducers} from 'redux';
import articlesReducer from './reducer_articles';
import {reducer as formReducer} from 'redux-form';
const rootReducer = combineReducers({
    articles: articlesReducer,
    form: formReducer
});

export default rootReducer;
