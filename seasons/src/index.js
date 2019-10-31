import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { lat: null, errMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rendered! ');        
    }

    render() {
        if (this.state.errMessage && !this.state.lat) {
            return <div>Error: {this.state.errMessage}</div>
        }

        if (!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));