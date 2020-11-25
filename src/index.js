import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommenDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
        return <div className="ui container comments">
                <ApprovalCard>
                        <div>
                                <h4>Warning!</h4>
                                Are you sure you want to do this?
                        </div>
                </ApprovalCard>
                <ApprovalCard>
                        <CommenDetail author="Sam" timeAgo="Today at 4:45pm"
                                comment="Nice blog!" image={faker.image.animals()} />
                </ApprovalCard>
                <ApprovalCard>
                        <CommenDetail author="Alex" timeAgo="Today at 3:45pm"
                                comment="Wow!" image={faker.image.animals()} />
                </ApprovalCard>
                <ApprovalCard>
                        <CommenDetail author="Jane" timeAgo="Today at 5:45pm"
                                comment="Best of luck!" image={faker.image.animals()} />
                </ApprovalCard>


        </div>


};

ReactDOM.render(<App />, document.querySelector('#root'));