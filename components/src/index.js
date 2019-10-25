// https://semantic-ui.com/introduction/getting-started.html

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src="logo192.png" alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Fernando
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6pm</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));