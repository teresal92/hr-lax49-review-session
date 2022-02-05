import React from 'react';
import ListElement from './ListElement.jsx';

const List = ({students}) => (
  <div>
    {students.map((student, i) => <ListElement student={student} key={`student-entry-${i}`}/>)}
  </div>
);

// const List = () => (
//   <div>
//     <span>
//       <div>Josh</div>
//       <img src='https://ca.slack-edge.com/T02DNK3PH-U01ATPUTRH8-0c6b5a486403-512'></img>
//     </span>
//     <span>
//       <div>Josh</div>
//       <img src='https://ca.slack-edge.com/T02DNK3PH-U01ATPUTRH8-0c6b5a486403-512'></img>
//     </span>
//     <span>
//       <div>Josh</div>
//       <img src='https://ca.slack-edge.com/T02DNK3PH-U01ATPUTRH8-0c6b5a486403-512'></img>
//     </span>
//     <span>
//       <div>Josh</div>
//       <img src='https://ca.slack-edge.com/T02DNK3PH-U01ATPUTRH8-0c6b5a486403-512'></img>
//     </span>
//     <span>
//       <div>Josh</div>
//       <img src='https://ca.slack-edge.com/T02DNK3PH-U01ATPUTRH8-0c6b5a486403-512'></img>
//     </span>
//     <span>
//       <div>Josh</div>
//       <img src='https://ca.slack-edge.com/T02DNK3PH-U01ATPUTRH8-0c6b5a486403-512'></img>
//     </span>
//   </div>
// );

export default List;