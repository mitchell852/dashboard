module.exports = angular.module('dashboard.user.edit', [])
    .controller('UserEditController', require('./UserEditController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('private.user.edit', {
                url: '',
                views: {
                    userContent: {
                        templateUrl: 'modules/private/user/edit/user.edit.tpl.html',
                        controller: 'UserEditController'
                    }
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    });
