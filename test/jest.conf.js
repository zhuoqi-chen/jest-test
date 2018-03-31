const path = require('path');
module.exports =  {
    rootDir: path.resolve(__dirname, '../'),
    transform: {
        '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    },
}