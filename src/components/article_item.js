import React, {Component} from 'react';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import {Link} from 'react-router';

export class ArticleItem extends Component {
    componentWillMount() {

    }



    render() {
        return (
            <div className="list-item panel" key={this.props.Article._id}
                onClick={()=>this.props.select(this.props.Article)}>
                <div className="title">{this.props.Article.title}</div>
                <div className="creation-date">{this.props.Article.publishedAtStr}</div>
            </div>
        );
    }
    select(){
        this.props.select(this.props.Article);
    }
}
function mapStateToProps(state) {
    return {}
}
export default connect(mapStateToProps, {select})(ArticleItem);