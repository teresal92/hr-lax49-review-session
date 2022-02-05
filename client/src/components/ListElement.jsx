import React from 'react';
const axios = require('axios');

class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      newName: '',
      id: this.props.student.id
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showEditFields = this.showEditFields.bind(this);
  }

  changeHandler(e) {
    // should setState newName to target value
    this.setState({ newName: e.target.value })
  }

  handleSubmit(e) {
   // prevent default behavior
   e.preventDefault();
   // send a put request via axios
   // need student id to send as params
   axios.put(`/class/students/${this.state.id}`, { name: this.state.newName })
   .then(() => this.props.getStudents() )
   .catch(err => console.err(`Error edit name submission: ${err}`))
  }

  //title and cancel button
  handleClick(e) {
    this.setState({ showEdit: !this.state.showEdit })
  }

  // when student's name is clicked, bring up the edit field
  showEditFields(e) {
    if (this.state.showEdit) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" onChange={this.changeHandler}/>
            <button type="submit" value="Edit">Edit</button>
          </form>
          <button value="Cancel" onClick={this.handleClick}>Cancel</button>
        </div>
      )
    }
  }

  render() {
    return (
      <span>
        <div onClick={this.handleClick}>
          {this.props.student.name}
        </div>
        {this.showEditFields()}
        <img src={this.props.student.imgurl}></img>
      </span>
    );
  }
}

// const ListElement = ({student}) => (
//   <span>
//     <div>{student.name}</div>
//     <img src={student.imgurl}></img>
//   </span>
// );

export default ListElement;