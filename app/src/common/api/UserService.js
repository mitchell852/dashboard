var UserService = function($http, $log, $state, $q, $location, authService, userModel, messageModel, ENV) {

    var service = this;

    this.getCurrentUser = function() {
        var token = $location.search().token,
            deferred = $q.defer();

        if (angular.isDefined(token)) {
            $location.search('token', null); // remove the token query param
            authService.tokenLogin(token)
                .then(
                    function(response) {
                        service.getCurrentUser();
                    }
                );
        } else {
            $http.get(ENV.apiEndpoint['1.2'] + "user/current.json")
                .success(function(result) {
                    $log.debug("UserService: getCurrentUser success");
                    userModel.setUser(result.response);
                    deferred.resolve(result.response);
                })
                .error(function(fault) {
                    $log.debug("UserService: getCurrentUser failed");
                    deferred.reject(fault);
                });

            return deferred.promise;
        }
    };

    this.updateCurrentUser = function(userData) {
        var deferred = $q.defer();
        var user = _.omit(userData, 'loaded'); // let's pull the loaded key off of there
        $http.post(ENV.apiEndpoint['1.2'] + "user/current/update", { user: user })
            .success(function(result) {
                $log.debug("UserService: updateCurrentUser success");
                userModel.setUser(userData);
                messageModel.setMessages(result.alerts, false);
                deferred.resolve(result);
            })
            .error(function(fault) {
                $log.debug("UserService: updateCurrentUser failed");
                if (angular.isDefined(fault.alerts)) {
                    messageModel.setMessages(fault.alerts, false);
                }
                deferred.reject();
            });

        return deferred.promise;
    };

    this.resetPassword = function(email) {
        var deferred = $q.defer();
        $http.post(
                ENV.apiEndpoint['1.2'] + "user/reset_password", { email: email })
            .success(function(result) {
                $log.debug("UserService: resetPassword success");
                messageModel.setMessages(result.alerts, false);
                deferred.resolve(result);
            })
            .error(function(fault) {
                $log.debug("UserService: resetPassword failure");
                if (angular.isDefined(fault.alerts)) {
                    messageModel.setMessages(fault.alerts, false);
                }
                deferred.reject();
            });

        return deferred.promise;
    };

};

UserService.$inject = ['$http', '$log', '$state', '$q', '$location', 'authService', 'userModel', 'messageModel', 'ENV'];
module.exports = UserService;