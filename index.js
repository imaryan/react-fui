/**
 * Created by Aryan on 2016/3/26.
 */
import React from 'react';
import { render } from 'react-dom';
import Loading from './components/Loading';

class App extends React.Component {
    componentDidMount() {

    }

    renderLeftButton() {
        return (
            <input type="button" value="test" />
        );
    }

    renderTitle() {
        return (
            <input type="button" value="test" />
        );
    }

    render() {
        const title = {
            tintColor: 'white',
            title: '漫果'
        };
        return (
            <Loading />
        );
    }
}

window.onload = () => {
    render(<App />, document.getElementById('content'));
};
