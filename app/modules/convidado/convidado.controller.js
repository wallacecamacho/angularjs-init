(function () {
    'use strict';

    angular
        .module('convidado.module')
        .controller('convidado.controller', controller)

    controller.$inject = ['$location', '$scope', 'toastr', 'convidadoService'];

    function controller($location, $scope, toastr, convidadoService) {
        /* jshint validthis:true */
        var vm = this;
        $scope.ufDataSelect = [];
        $scope.EmpModel = {
            Id: 0,
            Identidade: 0.00,
            Nome: '',
            UfData: '',
        };
        $scope.EmpList = [];

        activate();

        function activate() {
            //getUfs();
            $scope.ufDataSelect = getUfs().then(function() {
                console.log($scope.ufDataSelect)//olhar no console
            });
            console.log($scope.ufDataSelect)//olhar no console
        }

        function getUfs() {
            return convidadoService.getUf().then(function (data) {
                $scope.ufDataSelect = data;
                return vm.ufDataSelect;
            });
        }


        $scope.AddData = function () {
            var _emp = {
                Id: $scope.EmpList.length + 1,
                Nome: $scope.EmpModel.Nome,
                Identidade: $scope.EmpModel.Identidade,
                UfData: $scope.EmpModel.UfData
            };
            $scope.EmpList.push(_emp);
            ClearModel();
        }

        $scope.DeleteData = function (emp) {
            var _index = $scope.EmpList.indexOf(emp);
            $scope.EmpList.splice(_index, 1);
            ClearModel();
            openToastSucesso('Usuário removido');
        }



        $scope.BindSelectedData = function (emp) {
            $scope.EmpModel.Id = emp.Id;
            $scope.EmpModel.Nome = emp.Nome;
            $scope.EmpModel.Identidade = emp.Identidade;
            $scope.EmpModel.UfData = emp.UfData;
            $
        }

        $scope.UpdateData = function () {
            $.grep($scope.EmpList, function (e) {
                if (e.Id == $scope.EmpModel.Id) {
                    e.Nome = $scope.EmpModel.Nome;
                    e.Identidade = $scope.EmpModel.Identidade;
                }
            });
            ClearModel();
        }

        function ClearModel() {
            $scope.EmpModel.Id = 0;
            $scope.EmpModel.Nome = '';
            $scope.EmpModel.Identidade = 0;
            $scope.EmpModel.UfData = '';
        }

        function openToastSucesso(message) {
            toastr.success(message, 'Sucesso', {
                closeButton: true,
                progressBar: true,
                timeOut: 2000,
            });
        }
    }
})();