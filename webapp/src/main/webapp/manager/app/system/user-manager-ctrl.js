diamond.controller('userManagerController', function ($rootScope,$scope,$log,$loggedHttp) {

    $scope.list = [
        {
            code : '1213123',
            title : '王金平幕僚：马英九声明字字见血 人活着没意思',
            user : 'admin',
            address : '江苏南京',
            time : '2013-09-09 15:05'
        }
    ];

    $scope.tableconfigs = {
        name : "asdasd",
        getData : function () {
            var data = "asdasd";
            return data;
        }
    }
});