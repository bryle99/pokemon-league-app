const { StatusCodes, getReasonPhrase } = require('http-status-codes');

module.exports = (err, req, res, next) => {
    if (err.isJoi) {
        const error = {
            code: StatusCodes.BAD_REQUEST,
            message: getReasonPhrase(StatusCodes.BAD_REQUEST),
            details:
                err.details &&
                err.details.map((err) => {
                    return {
                        message: err.message,
                        param: err.path,
                    };
                }),
        };
        return res.status(StatusCodes.BAD_REQUEST).json(error);
    }
    // If this isn't a Joi error, send it to the next error handler
    return next(err);
}