module.exports = app => {
  const sharingprofiles = require("../controllers/sharingprofile.controller.js");

  var router = require("express").Router();

  // Create a new sharingprofiles
  router.post("/", sharingprofiles.create);

  // Retrieve all sharingprofiles
  router.get("/", sharingprofiles.findAll);

  // Retrieve all published sharingprofiles
  router.get("/published", sharingprofiles.findAllPublished);

  // Retrieve a single sharingprofiles with id
  router.get("/:id", sharingprofiles.findOne);

  // Update a sharingprofiles with id
  router.put("/:id", sharingprofiles.update);

  // Delete a Tutorial with id
  router.delete("/:id", sharingprofiles.delete);

  // Create a new Tutorial
  router.delete("/", sharingprofiles.deleteAll);

  app.use("/api/sharingprofiles", router);
};
