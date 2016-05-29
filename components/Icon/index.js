/**
 * Created by Aryan on 2016/5/28.
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './index.less';
import '../../components/Style/index.css';

export default class Icon extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <i className={classNames('iconfont', this.props.name)}
              style={{ fontSize: this.props.size, color: this.props.color }}
            >
            </i>
        );
    }
}
Icon.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string
};
Icon.defaultProps = {
    size: 22
}
