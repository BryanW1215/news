import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetch, sortByDate, sortByTitle} from '../actions/index';
import {Link} from 'react-router';
import ArticleItem from './article_item';
let errors = 0;
class ArticlesList extends Component {

    componentWillMount() {
        this.props.fetch();
    }

    renderArticles() {
        let retList = [];
        _.each(this.props.Articles, (Article) => {
            retList.push((
                <ArticleItem key={Article.publishedAtTimeStamp} Article={Article}/>
            ));

        });
        return retList;
    }
    renderSortButtion() {
        let text = this.props.sort === "DATE" ? "Sort By Title" : "Sort By Date";
        return (<div className="panel btn" onClick={()=>this.sort()}>{text}</div>)
    }
    sort() {
        this.props.sort === "DATE" && this.props.sortByTitle();
        this.props.sort === "TITLE" && this.props.sortByDate();

    }
    render() {
        errors = 0;
        let className = "article-list list";
        className = !this.props.Article ? className : className + " left";
        return (
            <div className={className}>

                    {this.renderArticles()}

                {this.renderSortButtion()}
            </div>


        )
    }
}
function mapStateToProps(state) {
    return {Articles: state.articles.all, Article: state.articles.selected, sort: state.articles.sort};
}

export default connect(mapStateToProps, {fetch, sortByDate, sortByTitle})(ArticlesList);