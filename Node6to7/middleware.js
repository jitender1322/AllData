const middleware = (req, res, next) => {
  if (req.query.id) {
    next();
  } else {
    res.redirect("/");
  }
};

module.exports = middleware;
