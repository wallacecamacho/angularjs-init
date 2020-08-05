'use strict';

angular.
  module('app.init').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/convidado', {
          templateUrl: 'modules/convidado/convidado.editNew.html',
          controller: 'convidado.controller',
          controllerAs: 'vm'
        }).
        when('/convidado/:convidadoId', {
          templateUrl: 'modules/convidado/convidado.edit.html',
          controller: 'convidado.controller',
          controllerAs: 'vm'
        }).
        otherwise('/convidado');
    }
  ]);
