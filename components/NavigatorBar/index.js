import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './index.css';

const ButtonShape = {
    title: PropTypes.string.isRequired,
    style: PropTypes.style,
    handler: PropTypes.func,
};

const TitleShape = {
    title: PropTypes.string.isRequired,
    tintColor: PropTypes.string,
};
export default class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: this.props.style,
            leftButton: this.props.leftButton,
            title: this.props.title,
            rightButton: this.props.rightButton
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    getButtonElement(data = {}) {
        if (!data) return false;
        return (
            <div className={styles.navBarButtonContainer} >
                {(!!data.props) ? data : (
                    <a className={styles.navTextButton} onClick={data.handler} style={data.style}>
                        {data.title}
                    </a>
                )}
            </div>
        );
    }

    getTitleElement(data) {
        if (!!data.props) {
            return <div className={styles.navBarTitleContainer}>{data}</div>;
        }
        const tintColor = data.tintColor;
        return (
            <div className={styles.navBarTitleContainer} style={{ color: tintColor }}>
                {data.title}
            </div>
        );
    }

    update(config) {
        this.setState(config);
    }

    render() {
        const { style, title, leftButton, rightButton } = this.state;
        return (
            <header
              style={style}
              className={classNames(styles.nav, styles.navBar)}
            >
                {this.getTitleElement(title)}
                {this.getButtonElement(leftButton)}
                {this.getButtonElement(rightButton)}
            </header>
        );
    }
}
HeaderBar.defaultProps = {
    title: {
        title: ''
    }
};
HeaderBar.propTypes = {
    style: PropTypes.any,
    leftButton: PropTypes.oneOfType([
        PropTypes.shape(ButtonShape),
        PropTypes.element,
    ]),
    rightButton: PropTypes.oneOfType([
        PropTypes.shape(ButtonShape),
        PropTypes.element,
    ]),
    title: PropTypes.oneOfType([
        PropTypes.shape(TitleShape),
        PropTypes.element,
    ]),
};
