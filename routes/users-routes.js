const express = require("express");
const { check } = require("express-validator");

const usersController = require("../controller/users-controller");
const router = express.Router();

router.get("/:userId", usersController.getUserById);
router.get("/", usersController.getUsers);

router.post(
  "/signup",
  [check("username").not().isEmpty(), check("password").isLength({ min: 6 })],
  usersController.signUp
);
router.post("/login", usersController.login);

module.exports = router;
