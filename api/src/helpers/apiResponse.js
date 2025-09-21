class apiResponse {
  constructor(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.status =
      this.statusCode >= 200 && this.statusCode < 300 ? "Ok" : "Error";
    this.data = data;
  }
  static sendSuccess(res, statusCode, message, data) {
    return res
      .status(statusCode)
      .json(new apiResponse(message, statusCode, data));
  }
}

module.exports = apiResponse;
