var InterValObj; //控制时间
var defaultTimes = 60; //默认失效时间
var curTimes = null;//当前剩余秒数
var clickCount=1;//统计点击次数
var maxClickCount = 10; //最大允许的点击值
var msgId = 0;
angular.module("userBoundApp",[]).controller("userBoundController", function ($scope, $http) {
    $scope.errorMsg = '';

    $scope.boundUserNum = function () {

    };

    $scope.getVerCode = function () {
        var productNo = $("#productNo").val();
        if(productNo != '' && productNo != '请输入手机号码'){
            if(productNo.length != 11){
                alert("您输入的号码位数不对！");
                return false;
            }
        }else{
            alert("您输入的号码不能为空！");
            return false;
        }

        if(clickCount <= maxClickCount){
            clickCount = clickCount + 1;
        }else{
            alert("您获取验证码的次数太频繁，请稍后再试！");
            setTimeout(function(){clickCount=1}, 60000); //60000,一分钟
            return false;
        }
        curTimes = defaultTimes;
        var param ={};
        param.accNbr = productNo;
        /*var rsp = ajaxService.getVerCodeFromUAM(param);
        if(rsp.resultCode == '0'){
            msgId = rsp.msgId;
            $("#verCodeBtn").html('<span class="bound_font2">获取成功，' + curTimes + '秒后失效</span>');
            InterValObj = window.setInterval(setRemainTime, 1000); //启动计时器，1秒执行一次
        }else{
            if(rsp.resultMsg != null){
                alert(rsp.resultMsg);
            }else{
                alert("获取验证码失败，请重新获取！");
            }

        }*/
    };


    //时间处理函数
    function setRemainTime() {
        if (curTimes == 0) {
            window.clearInterval(InterValObj);//停止计时器
            $("#verCodeBtn").html('<input type="button" class="bound_input2" value="获取验证码" onclick="getVerCode()" />');
        } else {
            curTimes--;
            $("#verCodeBtn").html('<span class="bound_font2">获取成功，' + curTimes + '秒后失效</span>');
        }
    }
});

angular.element(document).ready(function () {
    angular.bootstrap(angular.element('body'), ['userBoundApp']);
});