import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import ArticleList from '../components/article_list';
import ArticleDetail from '../components/article_detail';
class ArticlesIndex extends Component {
    componentWillMount() {
    }

    render() {
        return (
            <div>
                <ArticleList/>
                <ArticleDetail article={this.props.Article}/>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {Article: state.articles.selected}
}
export default connect(mapStateToProps, {})(ArticlesIndex);