const validate = (ajvValidate) => {
    return (req, res, next) => {
        const valid = ajvValidate(req.body);
        if (!valid) {
            const error = ajvValidate.errors;
            res.status(200).json({
                message: error,
                error: true,
            });
        } else {
            next();
        }
    }
}

module.exports = validate