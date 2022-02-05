import React from 'react';

/*
  This component does not necessarily have to be a class component.
  There are multiple ways to implement this feature.
  How would you implement this as a functional component?
*/
export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      student: ''
    }
    this.getRandomStudent = this.getRandomStudent.bind(this);
  }

  getRandomStudent(){
    // this gives us a random index value
    var ind = Math.floor(Math.random() * this.props.students.length);
    // Todo: Add your logic here to grab one random student
    this.setState({ student: this.props.students[ind]})
  }

  render() {
    return (
      <div>
        <button onClick={this.getRandomStudent}>Randomize</button>
        <div>
          <h1>{this.state.student.name}</h1>
          <img src={this.state.student.imgurl}></img>
        </div>

      </div>
    )
  }
}