const ajvInstance = require('../schema/ajv.instance');

const schema = {
    type: 'object',
    properties: {
        email: { type: 'string', format: 'email' },
        password: { type: 'string' },
        active: { type: 'integer' }
    },
    required: ['email', 'password'],
    additionalProperties: false
}

module.exports = ajvInstance.compile(schema);