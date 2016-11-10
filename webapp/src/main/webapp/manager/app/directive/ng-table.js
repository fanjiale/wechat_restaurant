diamond.directive('ngTable', function () {
    return {
        restrict: "EA",
        scope: {
            tableconfigs: '='
        },
        templateUrl: 'manager/app/directive/ng-table.html',
        link: {
            pre: function (scope, element, attrs) {
                element.find('thead').append(scope.$parent.ngTableData.headContent);
                element.find('tbody').append(scope.$parent.ngTableData.bodyContent);
            },
            post: function (scope, element, attr) {
                var model = attr['tableconfigs'];

                var config = scope[model];


                scope.$watch('tableconfigs', function (newVlaue) {
                    console.log(newVlaue);
                });
            }
        },
        controller: function ($scope, $q, $log) {
            var initPageNum = 1;
            var initPageSize = 10;
            $scope.tableParameters = {};

            var me = $scope.tableconfigs;
            var deferred = $q.defer();
            var params = {};

            $scope.tableParameters.total = 0;
            $scope.tableParameters.data = [];
            $scope.tableParameters.sort = angular.isDefined(me.sort) ? me.sort : "";
            $scope.tableParameters.order = me.order == "desc" ? "desc" : me.order == "asc" ? "asc" : "";
            $scope.tableParameters.page = initPageNum;
            $scope.tableParameters.count = initPageSize;
            $scope.tableParameters.parameters = function () {
                return {
                    'count': $scope.tableParameters.count,
                    'page': $scope.tableParameters.page
                }
            };

            params.parameters = function (newParameters) {
                if (angular.isDefined(newParameters)) {
                    var page = newParameters.page;
                    var count = newParameters.count;

                    $scope.tableParameters.page = angular.isDefined(page) ? page : initPageNum;
                    $scope.tableParameters.count = angular.isDefined(count) ? count : initPageSize;
                }
                return $scope.tableParameters.parameters();
            };

            params.count = function (count) {
                return angular.isDefined(count) ? this.parameters({
                    'count': count
                }) : $scope.tableParameters.count;
            };

            params.page = function (page) {
                return angular.isDefined(page) ? this.parameters({
                    'page': page
                }) : $scope.tableParameters.page;
            };

            params.total = function (total) {
                $scope.tableParameters.total = angular.isDefined(total) ? total : 0;
                return $scope.tableParameters.total;
            };

            params.sort = function (sort) {
                if(angular.isDefined(sort)) $scope.tableParameters.sort =sort;

                return $scope.tableParameters.sort;
            };

            params.order = function (order) {
                if (angular.isDefined(order)) {
                    if (order.toLowerCase() == "desc") {
                        $scope.tableParameters.order = order;
                        return "desc";
                    }
                    else if (order.toLowerCase() == "asc") {
                        $scope.tableParameters.order = order;
                        return "asc";
                    }
                    else {
                        return $scope.tableParameters.order;
                    }
                }
                else {
                    return $scope.tableParameters.order;
                }
            };

            params.data = function () {
                return $scope.tableParameters.data;
            };

            params.reload = function () {
                me.getData(deferred, params);
                var promise = deferred.promise;

                promise.then(function (result) {
                    $scope.tableParameters.data = result;

                    $scope.list = $scope.tableParameters.data;
                });

            };

            params.reload();
        }
    }
}).directive('tableContent', function () {
    return {
        restrict: "EA",
        compile: function (element, qw, asd) {
            var headContent = element.find("thead").html();

            var bodyContent = element.find("tbody").html();

            return {
                post: function (scope, iElem, iAttrs) {
                    scope.ngTableData = {
                        headContent: headContent,
                        bodyContent: bodyContent
                    }

                }
            }

        }
    }
})
    .directive('tableCompile', function ($compile) {
        return function (scope, element, attrs) {
            scope.$watch(element,function (value) {
                    $compile(element.contents())(scope);
                }
            );
        };
    })
// configure new 'compile' directive by passing a directive
// factory function. The factory function injects the '$compile'
    .directive('compile', function ($compile) {
        // directive factory creates a link function
        return function (scope, element, attrs) {
            scope.$watch(
                function (scope) {
                    // watch the 'compile' expression for changes
                    return scope.$eval(attrs.compile);
                },
                function (value) {
                    // when the 'compile' expression changes
                    // assign it into the current DOM
                    element.html(value);
                    // compile the new DOM and link it to the current
                    // scope.
                    // NOTE: we only compile .childNodes so that
                    // we don't get into infinite loop compiling ourselves
                    $compile(element.contents())(scope);
                }
            );
        };
    });