class Validations {
  static validateBody = (req, res, next) => {
    const { title, time, description } = req.body;
    if (!title) {
      return res.status(400).json({ message: '"title" is required' });
    }
    if (!time) {
      return res.status(400).json({ message: '"time" is required' });
    }
    if (!description) {
      return res.status(400).json({ message: '"description" is required' });
    }
    return next();
  };
}

module.exports = { Validations };
