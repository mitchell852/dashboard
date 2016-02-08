module.exports = angular.module('dashboard.models', [])
    .service('messageModel', require('./MessageModel'))
    .service('userModel', require('./UserModel'));
