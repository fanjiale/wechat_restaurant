diamond.controller('configManagerController', function ($rootScope,$scope,$log,$loggedHttp) {

    $scope.selectedMenu = "1";

    $scope.selectMenu = function (menu) {
        $scope.selectedMenu = menu;
    };

    $scope.refreshMenu = function () {
        $loggedHttp.post('menu/refresh').success(function (response) {

        });
    };

    $scope.refreshConfig = function () {

    };
});