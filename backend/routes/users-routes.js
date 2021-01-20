const express = require("express");
const { check } = require("express-validator");
const authAdmin = require("../middleware/check-auth-admin");

const usersController = require("../controller/users-controller");
const router = express.Router();

router.get("/users/:userId", usersController.getUserById);
router.get("/admin/users", authAdmin, usersController.getUsers);

router.post(
  "/users/signup",
  [check("username").not().isEmpty(), check("password").isLength({ min: 6 })],
  usersController.signUp
);
router.post("/users/login", usersController.login);

router.post(
  "/users/:userId",
  [check("nickname").not().isEmpty(), check("password").isLength({ min: 6 })],
  usersController.getUserById
);
module.exports = router;
