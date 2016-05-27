/**
 * Created by Aryan on 2016/2/2.
 */
import React from 'react';
import styles from './index.css';
import classNames from 'classnames';

export default class Loading extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className={classNames(styles.layout)}>
                <div className={classNames(styles.loading)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
    }
}