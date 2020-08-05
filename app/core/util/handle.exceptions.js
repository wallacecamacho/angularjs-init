/* recommended */
angular
    .module('blocks.exception')
    .config(exceptionConfig);

exceptionConfig.$inject = ['$provide', '$uibModal'];

function exceptionConfig($provide, $uibModal) {
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
}

extendExceptionHandler.$inject = ['$delegate', 'toastr'];

function extendExceptionHandler($delegate, toastr) {
    return function(exception, cause) {
        $delegate(exception, cause);
        var errorData = {
            exception: exception,
            cause: cause
        };
        /**
         * Could add the error to a service's collection,
         * add errors to $rootScope, log errors to remote web server,
         * or log locally. Or throw hard. It is entirely up to you.
         * throw exception;
         */
        toastr.error(exception.msg, errorData);
    };
}


.controller('ctrl', function ($scope, $uibModal) {
    'use strict';
    
    $scope.openModal = function () {
      $uibModal.open({
        templateUrl: 'modal.html',
        controller: function ($scope, $uibModalInstance) {
          $scope.ok = function () {
            $uibModalInstance.close();
          };
        
          $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };
        }
      })
    };