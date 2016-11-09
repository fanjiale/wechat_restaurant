diamond.directive('ngTable', function () {
    return {
        restrict: "EA",
        scope: {
            tableconfigs: '='
        },
        templateUrl : 'app/directive/ng-table.html',
        link : {
            pre : function (scope, element, attrs) {

                element.find('thead').append(scope.$parent.ngTableData.headContent);
                element.find('tbody').append(scope.$parent.ngTableData.bodyContent);

                var model = attrs['tableconfigs'];

                var config = scope[model];



                scope.$watch('tableconfigs', function (newVlaue) {
                    console.log(newVlaue);
                });
            },
            post : function (scope, element, attr) {
                var model = attr['tableconfigs'];

                var config = scope[model];



                scope.$watch('tableconfigs', function (newVlaue) {
                    console.log(newVlaue);
                });
            }
        },
        controller : function ($scope) {
            var config = $scope.tableconfigs;




            var name = "sadasd";
        }
    }
}).directive('tableContent', function () {
    return {
        restrict: "EA",
        compile: function(element,qw,asd){
            var headContent = element.find("thead").html();

            var bodyContent = element.find("tbody").html();

            return {
                pre: function(scope, iElem, iAttrs){
                    console.log(name + ': pre link');
                },
                post: function(scope, iElem, iAttrs){
                    scope.ngTableData = {
                        headContent : headContent,
                        bodyContent : bodyContent
                    }

                }
            }

        }
    }
});