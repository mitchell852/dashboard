var HeaderController = function($scope, $state, $anchorScroll, $uibModal, authService, userModel) {

    $scope.isCollapsed = true;

    $scope.user = angular.copy(userModel.user);

    $scope.isState = function(state) {
        return $state.current.name.indexOf(state) !== -1;
    };

    $scope.navigateToState = function(to) {
        $state.go(to);
    };

    $scope.logout = function() {
        authService.logout();
    };

    var scrollToTop = function() {
        $anchorScroll(); // hacky?
    };

    $scope.$on('userModel::userUpdated', function(event) {
        $scope.user = angular.copy(userModel.user);
    });

    var init = function () {
        scrollToTop();
    };
    init();
};

HeaderController.$inject = ['$scope', '$state', '$anchorScroll', '$uibModal', 'authService', 'userModel'];
module.exports = HeaderController;
