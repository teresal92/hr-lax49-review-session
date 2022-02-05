const db = require('../db');

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      let queryString = 'SELECT * FROM students LEFT JOIN images ON students.id = images.id';
      db.query(queryString, (err, result) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.json(result);
        }
      })

    },
    postName: function (req, res) {
      // TODO: add your code here to add a student's name
      let name = req.body.name;
      let queryString = 'INSERT INTO students (name) VALUES(?)';
      db.query(queryString, [ name ], (err, result) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(201).send(result);
        }
      })

    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name
      let id = req.params.id;
      let name = req.body.name;
      console.log('id: ', id);
      let queryString = 'UPDATE students SET name = ? WHERE id = ?'
      db.query(queryString, [ name, id ], (err, result) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(201).send(result);
        }
      })

    }
  },
  images: {
    postImg: function (req, res) {
      // TODO: add your code here to add a student image
      let imgurl = req.body.imgurl;
      let queryString = 'INSERT INTO images (imgurl) VALUES (?)';
      db.query(queryString, [ imgurl ], (err, result) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(201).send(result);
        }
      })
    }
  }
};

module.exports = controller;