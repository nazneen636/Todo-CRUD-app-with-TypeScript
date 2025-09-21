require("dotenv").config();
const developmentError = (error, res) => {
  const statusCode = error.statusCode || 400;
  return res.status(statusCode).json({
    message: error.message,
    status: error.statusCode,
    isOperationalError: error.isOperationalError,
    data: error.data,
    errorTraceStack: error.stack,
  });
};

const productionError = (error, res) => {
  const statusCode = error.statusCode || 500;
  if (error.isOperationalError) {
    return res.status(statusCode).json({
      message: error.message,
      status: error.status,
    });
  } else {
    return res.status(statusCode).json({
      message: "Server failed try again",
    });
  }
};

exports.globalErrorHandle = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  if (process.env.NODE_ENV === "development") {
    developmentError(error, res);
  } else {
    productionError(error, res);
  }
};
