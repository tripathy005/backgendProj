const logger = (req, res, next) => {
    const { method, url } = req;
    console.log(`{new Date().toISOString()} | ${req.method} ${req.url}`);
    next();
  }
  module.exports = logger;