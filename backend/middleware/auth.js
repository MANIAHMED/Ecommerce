const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const req = require("express/lib/request");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  console.log('hello from authentication');

  if (!token) {
    return next(new ErrorHandler("Please Logn to Access this resource", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);
  next();
});

exports.authorizeRole = (...roles) => {
  console.log("hello from authorize roles");
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to aceess this resource`,
          403
        )
      );
    }

    next();
  };
};
