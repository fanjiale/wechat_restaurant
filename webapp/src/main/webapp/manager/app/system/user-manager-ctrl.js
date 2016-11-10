diamond.controller('userManagerController', function ($rootScope, $scope, $log, $loggedHttp) {

    $scope.initPageNum = 1;
    $scope.initpageSize = 10;

    $scope.list = [
        {
            code: '1213123',
            title: '王金平幕僚：马英九声明字字见血 人活着没意思',
            user: 'admin',
            address: '江苏南京',
            time: '2013-09-09 15:05'
        }
    ];

    $scope.tableconfigs = {
        page: $scope.initPageNum,
        count: $scope.initpageSize,
        sort: "create_time",
        order : "desc",
        getData: function ($defer, params) {
            var condition = {};
            var param = {
                page: params.page(),
                count: params.count(),
                sort: params.sort(),
                order: params.order(),
                condition : condition
            };

            $loggedHttp.post('system/user/list', param).success(function (response) {
                var data = response.data;

                params.total(data.totalcount);
                $defer.resolve(data.items);
            });
        }
    }
});