const validator = require("express-validator");

const validateUser = [
    validator.body('name').notEmpty().withMessage('Name is required'),
    validator.body('email').isEmail().withMessage('Email must be valid'),
    validator.body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    validator.body('hobby').isArray({ min: 1 }).withMessage('At least one hobby is required'),
    validator.body('message').isLength({ max: 100 }).withMessage('Message cannot be more than 100 characters'),

    (req, res, next) => {
        const errors = validator.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateUser;