import React, {Component} from 'react';
import {connect} from 'react-redux';
import {unselect} from '../actions/index';
import {Link} from 'react-router';

export class ArticleDetail extends Component {
    componentWillMount() {

    }



    render() {
        if (!this.props.article) {
            return (<div className="article-detail panel hide"/>)
        }

        return (
            <div className="article-detail panel">
                <div className="title-container">
                    <div className="title">
                        {this.props.article.title}
                    </div>
                    <div className="btn-close" onClick={()=>this.unselect()}>X</div>
                </div>
                {this.props.article.description}
            </div>)
    }
    unselect(){
        this.props.unselect();
    }

}
function mapStateToProps(state) {
    return {}
}
export default connect(mapStateToProps, {unselect})(ArticleDetail);