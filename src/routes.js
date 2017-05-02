import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import ArticlesIndex from './components/article_index'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ArticlesIndex} />
    </Route>
);