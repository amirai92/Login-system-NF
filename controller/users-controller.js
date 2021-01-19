const HttpError = require("../models/http-error");
const User = require("../models/user");
const { validationResult } = require("express-validator");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { id, nickname, username, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ username });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try agian later.",
      500
    );
    return next(error);
  }
  if (existingUser) {
    const error = new HttpError(
      "User exists already, please login instead",
      422
    );
    return next(error);
  }
  const createdUser = new User({
    nickname,
    username,
    password,
  });
  createdUser.save();
  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Signing up failed, pleaase try agian.", 500);
    return next(error);
  }
  res.status(201);
  res.json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { username, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ username });
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try agian later.",
      500
    );
    return next(error);
  }
  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      "Invalid credentials, could not log you in!",
      401
    );
    return next(error);
  }
  res.json({ message: "Logged in" });
};

const getUserById = (req, res, next) => {
  const userId = req.params.userId;
  const user = FAKE_USERS.find((p) => {
    return p.id === userId;
  });
  if (!user) {
    throw new HttpError("Could not find a place for the provided id.", 404);
  }
  res.json({
    user,
  });
};

exports.getUserById = getUserById;
exports.getUsers = getUsers;
exports.signUp = signUp;
exports.login = login;
