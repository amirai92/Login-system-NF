const HttpError = require("../models/http-error");
const User = require("../models/user");
const { validationResult } = require("express-validator");
const bcrpyt = require("bcryptjs");

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
  const { nickname, username, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ username });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "User exists already, please login instead.",
      422
    );
    return next(error);
  }
  let hashedPassword;
  try {
    hashedPassword = await bcrpyt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("Could not create user, please try agian", 500);
    return next(error);
  }

  const createdUser = new User({
    nickname,
    username,
    password: hashedPassword,
    role: "user",
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Signing up failed, please try again.", 500);
    return next(error);
  }
  let token;
  try {
    token = await createdUser.generateUserToken();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Signing up failed, please try again.", 500);
    return next(error);
  }
  res.status(201).json({ userId: createdUser.id, token });
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
  if (!existingUser) {
    const error = new HttpError(
      "Invalid credentials, could not log you in!",
      401
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrpyt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Could not log you in, please check your credentials and try agian.",
      500
    );
    return next(error);
  }
  if (!isValidPassword) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      401
    );
    return next(error);
  }
  let token;
  try {
    token = await existingUser.generateUserToken();
  } catch (err) {
    const error = new HttpError("Logging up failed, please try again.", 500);
    return next(error);
  }

  res.json({
    message: "Logged in",
    userId: existingUser.id,
    token,
  });
};
const getUserById = async (req, res, next) => {
  const userId = req.params.userId;

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a user.",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError(
      "Could not find a user for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ user: user.toObject({ getters: true }) });
};
exports.getUserById = getUserById;
exports.getUsers = getUsers;
exports.signUp = signUp;
exports.login = login;
