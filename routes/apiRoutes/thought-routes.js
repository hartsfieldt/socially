const router = require("express").Router();

const {
  getAllThoughts,
  createThought,
  getThoughtById,
  deleteThought,
  updateThought,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .delete(deleteThought)
  .put(updateThought);

module.exports = router;
