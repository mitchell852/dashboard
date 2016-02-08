var AuthService = function($http, $state, $location, $q, userModel, messageModel, ENV) {

    this.login = function(username, password) {
        userModel.resetUser();
        var promise = $http.post(
                ENV.apiEndpoint['1.2'] + "user/login", { u: username, p: password })
            .success(function(result) {
                var redirect = decodeURIComponent($location.search().redirect);
                if (redirect !== 'undefined') {
                    $location.search('redirect', null); // remove the redirect query param
                    $location.url(redirect);
                } else {
                    $location.url('/user');
                }
                return result;
            })
            .error(function(fault) {
                return fault;
            });

        return promise;
    };

    this.tokenLogin = function(token) {
        userModel.resetUser();
        var deferred = $q.defer();
        $http.post(
                ENV.apiEndpoint['1.2'] + "user/login/token", { t: token })
            .success(function(result) {
                deferred.resolve(result);
            })
            .error(function(fault) {
                deferred.reject(fault);
            });

        return deferred.promise;
    };

    this.logout = function() {
        userModel.resetUser();
        var promise = $http.post(
                ENV.apiEndpoint['1.2'] + "user/logout")
            .success(function(result) {
                if ($state.current.name == 'public.login') {
                    messageModel.setMessages(result.alerts, false);
                } else {
                    messageModel.setMessages(result.alerts, true);
                    $state.go('public.login');
                }
                return result;
            })
            .error(function(fault) {
                return fault;
            });

        return promise;
    };

};

AuthService.$inject = ['$http', '$state', '$location', '$q', 'userModel', 'messageModel', 'ENV'];
module.exports = AuthService;