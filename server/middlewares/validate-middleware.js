const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "fill the input Properly";
    const extraDetails = err?.issues?.[0]?.message || "Validation error";
    const error = {
      status,
      message,
      extraDetails,
    };

    // console.log(firstIssue);
    // res.status(400).json({ message: firstIssue });
    next(error);
  }
};

export default validate;
