const ajvInstance = require('../schema/ajv.instance');

const schema = {
    type: 'object',
    properties: {
        title: { type: 'string' },
        type: { type: 'string' },
        date: { type: 'string' },
        completed: { type: 'boolean' },
        user_id: { type: 'integer' }
    },
    additionalProperties: false
}

module.exports = ajvInstance.compile(schema);