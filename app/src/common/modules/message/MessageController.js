var MessageController = function($rootScope, $scope, messageModel) {

    $scope.messageData = messageModel;

    $scope.dismissMessage = function(message) {
        messageModel.removeMessage(message);
    };

    $scope.showConnectionLostMsg = function() {
        $('#lostConnectionMsg').show();
    };

    $scope.hideConnectionLostMsg = function() {
        $('#lostConnectionMsg').hide();
    };

    $rootScope.$watch('online', function(newStatus) {
        if (newStatus === false) {
            $scope.showConnectionLostMsg();
        }
    });

};

MessageController.$inject = ['$rootScope', '$scope', 'messageModel'];
module.exports = MessageController;
