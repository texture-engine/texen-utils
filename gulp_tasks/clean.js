var del = require('del');

module.exports = function () {
    return function (cb) {
        del(['dist', 'doc', 'build'], cb);
    };
};
