module.exports = angular.module('dashboard.public.login', [])
    .controller('LoginController', require('./LoginController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('public.login', {
                url: 'login',
                views: {
                    header: {
                        templateUrl: 'common/modules/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    message: {
                        templateUrl: 'common/modules/message/message.tpl.html',
                        controller: 'MessageController'
                    },
                    content: {
                        templateUrl: 'modules/public/login/login.tpl.html',
                        controller: 'LoginController'
                    }
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    });