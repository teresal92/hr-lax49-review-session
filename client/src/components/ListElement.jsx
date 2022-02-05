import React from 'react';

const ListElement = ({student}) => (
  <span>
    <div>{student.name}</div>
    <img src={student.imgurl}></img>
  </span>
);

export default ListElement;