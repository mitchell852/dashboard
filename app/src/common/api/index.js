/**
 * Define the remote services
 */
module.exports = angular.module('dashboard.api', [])
    .service('authService', require('./AuthService'))
    .service('userService', require('./UserService'))
;