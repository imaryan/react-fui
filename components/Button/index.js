/**
 * Created by Aryan on 2016/3/20.
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './index.css';
import '../../components/Style/index.css';
import Icon from '../../components/Icon';

export default class Button extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <button
              type="button"
              className={classNames(styles.btn, styles[this.props.classes])}
              style={this.props.style}
              onClick= {this.props.handler}
            >
                {this.props.icon ? <Icon name={this.props.icon} size={this.props.iconSize} /> : null}
                {this.props.text}
            </button>
        );
    }
}
Button.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.string,
    iconSize: PropTypes.number,
    handler: PropTypes.func,
    classes: PropTypes.string
};
Button.defaultProps = {
    text: 'Button',
    classes: '',
    style: {},
    iconSize: 24
};
