import * as _ from 'lodash';
import moment from 'moment';

export function transformArticle(article){
    let m = moment(article.publishedAt);
    article.publishedAtTimeStamp = m.unix();
    article.publishedAtStr = m.format("hh:mma dddd MMMM Do YYYY");
    return article;
}
export function transformArticles(articles){
    return _.map(articles, transformArticle);
}