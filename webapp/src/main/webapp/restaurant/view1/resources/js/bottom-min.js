

function LoadJs(Path, time) {
    if (time && time != "") {
        Path = Path + "?time=" + time;
    }
    document.write("<script type=\"text/javascript\" src=\"" + Path + "\"></script>");
}
function LoadCss(Path, time) {
    if (time != "") {
        Path = Path + "?time=" + time;
    }
    document.write("<link href=\"" + Path + "\" rel=\"stylesheet\" />");
}
var time = Math.floor(Math.random() * 100000000);
var time2 = "2015";
if (!IsWeiXin()) {
    LoadCss("/Mall/shop/App/css/bottom_style.css", time2);
    LoadCss("/Mall/Shop/JS/LIB/jquery-1.8.3.min.js", time2);
}
function IsWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

function bottom() {
    status1 = status1 + 1;
    if (IsWeiXin())
    {
        return;
    }
    if ((status == 1 && statu1 == 1) || (status == 1 && status1 > 2)) {
        document.body.removeChild(document.getElementById("b1"));
        document.body.removeChild(document.getElementById("b2"));
        //document.body.style.cssText = "margin-bottom:50px !important;";
        status = 0;
        return;
    } 
    var Query = new Array(location.href, RequestByName("CustID"));
    ExecAJ("AppBottom", Query, "bottomfun", null, "/AjaxAspx/ajaxApp.aspx");
    status = 1;
    //document.getElementById("b1").style.display= "none";
}
function bottomfun(data) {
    statu1 = data.split('|')[1];
    if ((data.split('|')[1] == "0" && status1 != 1) || data.split('|')[1] == "1") {
        var HTML = "<div style=\"height:50px;display:none;\" id=\"b1\"></div><div id=\"b2\" class=\"menu-bottom\"><div class=\"keyboard\" style=\"display:block;\"><a href=\"javascript:history.go(-1)\"></a></div>" + data.split('|')[0] + "</div>";
        $("body").prepend(HTML);
        $(".menu-bottom >div").on('click', function () {

            if (!$(this).find('ul').is(":visible")) {
                $(".menu-bottom >div").find("ul").hide();
                if ($(this).find('li').length>0) {
                    $(this).find('ul').show();
                }
            }
            else {  
                $(this).find('ul').hide();
            }
        });
    }
    controlbottomfun(data.split('|')[2])
}
var statu1 = 0;//底部是否显示（1是0否）
var status = 0;//底部现在是否显示（1是0否）
var status1 = 0;//底部操作图标是否显示（1是0否）
$(function () {

    //var Query = new Array(RequestByName("CustID"));
    //ExecAJ("ControlAppBottom", Query, "controlbottomfun", null, "/AjaxAspx/ajaxApp.aspx");
    bottom();//是否初始化显示
    

   
})
function controlbottomfun(data)
{
    if(data=="1"&&status1==1)
    {
            var HTML = "<a class=\"fball\" id=\"fball\" href=\"javascript:\" id=\"showbottom\" onclick=\"bottom()\"></a>";
            $("body").prepend(HTML);
            document.body.style.cssText = "margin:0px !important;";
            var fball = document.getElementById('fball');
            fball.addEventListener('touchmove', function (event) {
                event.preventDefault();//阻止其他事件
                // 如果这个元素的位置内只有一个手指的话
                if (event.targetTouches.length == 1) {
                    var touch = event.targetTouches[0];  // 把元素放在手指所在的位置
                    fball.style.left = (touch.pageX - 50) * 1 + 'px';
                    fball.style.top = (touch.pageY - 25) * 1 + 'px';
                }
            }, false);
        
        window.onscroll = function () {
            var box = document.getElementById("fball");
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            var l = document.documentElement.scrollLeft || document.body.scrollLeft;
            box.style.top = (t + 350) + "px";
            box.style.left = l + "px";
        }
        Hint();//快捷按钮提示幕
    }else
    {
        document.body.style.cssText = "margin:0px !important;";
    }
}

function Hint()
{
    //DelCookie("HintDiv")
    if (getCookie("HintDiv")!="") {
        return;
    } else {
        SetCookie("HintDiv", "1");
    }
    var HTML = "<div class=\"yindao\"><div class=\"ydcon\"><img src=\"/Mall/shop/App/images/yindao.png\"/><a href=\"javascript:;\" class=\"iknowbtn\">我知道了</a></div></div>";
    $("body").prepend(HTML);

    var yindaoDiv = document.querySelector('.yindao');
    var iknowBtn = document.querySelector('.iknowbtn');
    iknowBtn.onclick = function(){
        yindaoDiv.style.display = 'none';
    }
}

function SetCookie(name, value)//两个参数，一个是cookie的名子，一个是值
{
    var Days = 365; //此 cookie 将被保存 30 天
    var exp = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function DelCookie(name)
    //删除Cookie
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    document.cookie = name + "=" + cval + ";  expires=" + exp.toGMTString();
}
function getCookie(name)//取cookies函数        
{
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
        return unescape(arr[2]);
    }
    else {
        return null;
    }

}
