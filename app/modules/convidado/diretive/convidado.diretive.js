(function () {
    'use strict';

    angular
        .module ('convidado.module')
        .directive ('convidadoDiretive', directive);

    directive.$inject = ['$window'];

    function directive($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            templateUrl: '/modules/convidado/diretive/convidado.diretive.template.html',
            link: link,
            restrict: 'EA',
            controller: 'convidado.controller',
            controllerAs: 'vm',
            bindToController: true // because the scope is isolated
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();