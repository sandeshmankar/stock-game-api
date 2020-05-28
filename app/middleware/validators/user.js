const {body, query} = require('express-validator');

// validation all filed in user filed
const validateUserLogin = () => {
    return [
        body('balance', 'Balance is required').exists().trim(),
        body('balance', 'Balance Should be a positive number').isInt({gt: 0}),
        body('portalProviderUserID', 'portalProviderUserID is required').exists(),
        body('portalProviderUUID', 'portalProviderUUID is required').exists(),
        body('portalProviderUUID', 'portalProviderUUID should be valid UUID').isUUID().trim()
    ]
}

const validateUserLogout = () => {
    return [
        query('userUUID', 'userUUID is required').exists(),
        query('userUUID', 'Invalid userUUID').isUUID()
    ]
}

const validateGetUser = () => {
    return [
        query('userUUID', 'userUUID is required').exists(),
        query('userUUID', 'Invalid userUUID').isUUID(),
        query('portalProviderUUID', 'portalProviderUUID is required').exists(),
        query('portalProviderUUID', 'portalProviderUUID should be valid UUID').isUUID().trim()
    ]
}

const validateUpdateUser = () => {
    return [
        body('userUUID', 'userUUID is required').exists(),
        body('userUUID', 'Invalid userUUID').isUUID(),
        body('portalProviderUUID', 'portalProviderUUID is required').exists(),
        body('portalProviderUUID', 'portalProviderUUID should be valid UUID').isUUID().trim(),
        body('email', 'Enter correct email').optional().isEmail().normalizeEmail(),
        body('firstName', 'Input correct alphabetical first name').optional().isAlpha(),
        body('middleName', 'Input correct alphabetical middle name').optional().isAlpha(),
        body('lastName', 'Input correct alphabetical last Name').optional().isAlpha()
    ]
}

module.exports = {
    validateUserLogin,
    validateUserLogout,
    validateGetUser,
    validateUpdateUser
}