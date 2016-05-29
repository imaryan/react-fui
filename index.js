/**
 * Created by Aryan on 2016/3/26.
 */
import React from 'react';
import ReactDom from 'react-dom';
import NavigatorBar from './components/NavigatorBar';
import Button from './components/Button';

class App extends React.Component {
    componentDidMount() {

    }

    renderLeftButton() {
        return (
            <Button text="测试" icon="icon-back" style={{ color: 'white' }} handler={ () => {alert(111);} } />
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
        const rightButton = {
            title: '测试',
            style: { color: 'white', paddingRight: 10 },
            handler: () => {
                alert(11);
            }
        };
        return (
            <NavigatorBar
              style={{ backgroundColor: '#25B7AA' }}
              title={title}
              leftButton={this.renderLeftButton()}
              rightButton={rightButton}
            />
        );
    }
}

window.onload = () => {
    ReactDom.render(<App />, document.getElementById('content'));
};
