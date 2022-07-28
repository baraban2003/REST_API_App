const messages = {
  400: "Bad request",
  401: "Not Authorize",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

const createError = (status, message = messages[status]) => {
  const error = new Error(message);
  error.status = status;
  throw error;
};

module.exports = createError;