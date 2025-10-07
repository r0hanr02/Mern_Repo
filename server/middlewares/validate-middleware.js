const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    let messages = [];

    if (Array.isArray(err.errors)) {
      messages = err.errors.map((e) => e.message);
    } else if (err.message) {
      messages = [err.message];
    } else {
      messages = ["Validation failed"];
    }
    res.status(400).json({ errors: messages });
  }
};

export default validate;
