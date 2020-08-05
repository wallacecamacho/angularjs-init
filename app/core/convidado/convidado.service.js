(function(){
    'use strict';

    angular
        .module('convidado.core')
        .factory('convidadoService', factory)

    factory.$inject = ['$http'];

    function factory($http) {
        var service = {
            getUf: getUf
        };

        return service;

        function getUf() {
            return $http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
                .then(getUfComplete)
                .catch(getUfFailed);
    
            function getUfComplete(response) {
                return response.data;
            }
    
            function getUfFailed(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
    }
})();