// https://semantic-ui.com/introduction/getting-started.html

import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Fernando" timeAgo="Today at 4:45PM" comment="Nice blog post!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Isabella" timeAgo="Today at 2:00AM" comment="I didn't like this" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));