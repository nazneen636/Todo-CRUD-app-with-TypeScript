class customError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.message = message || "Error occoured or try again";
    this.statusCode = statusCode;
    this.status =
      this.statusCode >= 400 && this.statusCode < 500
        ? "client error"
        : "server error";
    this.isOperationalError =
      this.statusCode >= 400 && this.statusCode < 500 ? "false" : "true";
    this.data = null;
    this.stack;
  }
}
module.exports = { customError };
