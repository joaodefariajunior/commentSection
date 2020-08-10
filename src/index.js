import React    from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from "./ApprovalCard";

const App=()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
           <CommentDetails author="Sam" timeAgo="Today at 4:45PM" comment="Impressive!"  foto={faker.image.avatar()}/> 
           </ApprovalCard>
           <ApprovalCard><CommentDetails author="Alex"timeAgo="Today at 3:46AM" comment="Boring!" foto={faker.image.avatar()} /> </ApprovalCard>
           <ApprovalCard><CommentDetails author="Jane"timeAgo="Yesterday at 6:54PM"  comment="rad!"foto={faker.image.avatar()}/></ApprovalCard>
            </div>
    )
} 

ReactDom.render(<App/>,document.querySelector('#root'))