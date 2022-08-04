const db = require("../models");
const Sharingprofile = db.sharingprofiles;

// Create and Save a new Tutorial 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.companyId) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Sharingprofile
  const Sharingprofile = new Sharingprofile({
    companyId: req.body.companyId
  });

  // Save Sharingprofile in the database
  Sharingprofiles
    .save(Sharingprofile)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Sharingprofile."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const companyId = req.query.companyId;
  var condition = companyId ? { companyId: { $regex: new RegExp(companyId), $options: "i" } } : {};

  Sharingprofile.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Sharingprofiles."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Sharingprofile with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Sharingprofile.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Sharingprofile with id=${id}. Maybe Sharingprofile was not found!`
        });
      } else res.send({ message: "Sharingprofile was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Sharingprofile with id=" + id
      });
    });
};

// Delete a Sharingprofile with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Sharingprofile.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Sharingprofile with id=${id}. Maybe Sharingprofile was not found!`
        });
      } else {
        res.send({
          message: "Sharingprofile was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Sharingprofile with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Sharingprofile were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Sharingprofile."
      });
    });
};

// Find all published Sharingprofile
exports.findAllPublished = (req, res) => {
  Tutorial.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Sharingprofile."
      });
    });
};
