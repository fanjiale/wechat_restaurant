function getRootPath() {

    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp

    var curWwwPath = window.document.location.href;

    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp

    var pathName = window.document.location.pathname;

    var pos = curWwwPath.indexOf(pathName);

    //获取主机地址，如： http://localhost:8083

    var localhostPath = curWwwPath.substring(0, pos);

    //获取带"/"的项目名，如：/uimcardprj

    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);

    //return localhostPaht + projectName;

    return localhostPath + projectName + "/";

}

angular.module("userBoundApp", []).controller("userBoundController", function ($scope, $http, $interval) {
    $scope.phone_num = '';
    $scope.ver_code = '';
    $scope.errorMsg = '';
    $scope.clickCount = 0; //统计点击次数
    $scope.maxClickCount = 10; //最大允许的点击值
    $scope.curTimes = null; //当前剩余秒数
    $scope.defaultTimes = 60; //默认失效时间
    $scope.msgId = 0;

    $scope.showCurTime = false;

    $scope.boundUserNum = function () {

    };

    $scope.getVerCode = function () {
        if (!$scope.phone_num || $scope.phone_num.length != 11) {
            alert("您输入的号码位数不对！");
            return;
        }

        if ($scope.clickCount <= $scope.maxClickCount) {
            $scope.clickCount++;
        }
        else {
            alert("您获取验证码的次数太频繁，请稍后再试！");
            setTimeout(function () {
                $scope.clickCount = 1;
            }, 60000); //60000,一分钟
            return;
        }

        $scope.curTimes = $scope.defaultTimes;

        $http.get(getRootPath() + 'userBoundWeb/getVerCodeFromUAM/' + $scope.phone_num).success(function (response) {
            var result = response.data;

            if (result.resultCode == '0') {
                $scope.msgId = result.msgId;

                $scope.showCurTime = true;

                $interval(setRemainTime, 1000, $scope.defaultTimes);

            } else {
                if (result.resultMsg != null) {
                    alert(result.resultMsg);
                } else {
                    alert("获取验证码失败，请重新获取！");
                }
            }
        });
    };

    function setRemainTime() {
        if (curTimes == 0) {
            $scope.showCurTime = false;
        } else {
            $scope.curTimes--;
        }
    }
});

angular.element(document).ready(function () {
    angular.bootstrap(angular.element('body'), ['userBoundApp']);
});