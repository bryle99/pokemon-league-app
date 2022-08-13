
module.exports.bodyValidate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            return next(error);
        }
        return next();
    };
};

module.exports.queryValidate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.query, { abortEarly: false });
        if (error) {
            return next(error);
        }
        return next();
    };
};

