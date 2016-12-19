
var dataimgsrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAAAWCAIAAAC9s7yxAAAAh0lEQVRoBe3SAQ0AIAwEMcC/1mkguOCSTsHn1j0zyynwfYHz/UIDFXgFSOWgUYDUxp+sJJWBRgFSG3+yklQGGgVIbfzJSlIZaBQgtfEnK0lloFGA1MafrCSVgUYBUht/spJUBhoFSG38yUpSGWgUILXxJytJZaBRgNTGn6wklYFGAVIbf7LyAr9gAvYW+ZeiAAAAAElFTkSuQmCC";

$(function () {

    if (custID != "" && id != "") {
        //InitData();
        InitControl();
    }

})

function InitData() {
    $.AjaxJson("m_s", SDI(new Array(custID, id)), function (d) {
        if (d != "" || d != null) {
            $(document).attr("title", d.title);
            $(document.body).html(d.html);
            InitControl();
        }
        $.ColseAjaxMsg();
    }, '')
}

function InitControl() {
    //初始化数据 解除 头部跟底部内间距
    $(".web-view").css({ "padding-top": "0px", "padding-bottom": "0px" });
    // $(".mall-footer").removeAttr("style");
    //清除间隔
    var cp = $(".mall-clearpadding").length;
    if (cp > 0) {
        $(".mall-row").css({ "padding": "0px" });
        //$("*").css({ "padding": "0px" });
        $(".mall-group >div").css({ "border-right": "0px" });
    }


    //判断元素是否存在
    if ($(".mall-header").length > 0) { $(".web-view").css({ "margin-top": "44px" }) }
    if ($(".mall-footer").length > 0) { $(".web-view").css({ "margin-bottom": "51px" }) }


    //初始化轮播组件
    $(".swiper-container").each(function (i) {
        var index = $(this).attr("data-index");
        var confg = $(this).attr("data-config");
        var cjson = JSON.parse(confg)
        new Swiper('.container-' + index,
            { effect: "slide", pagination: ".s-p-" + index, autoplay: 5000, loop: false }
            );
    })

    //初始化跳转组件
    //data-targeturl
    $("*[data-targeturl]").click(function () {

        var this_url = $(this).attr("data-targeturl");
        this_url = this_url.getHtmlUrl();
        if (this_url.indexOf("javascript:") != -1) {
            var Fun = this_url.replace("javascript:", "");
            eval(Fun);
        }
        else {
            //if (IsWeiXinWeb()) {
            //    window.location.href = this_url;
            //    return;
            //}
            //if (IsPcOrWeb() == false) {
            //    var u = this_url.match(/http:\/\/(.+)\.guoyuankezhan.com/)[0];
            //    var ru = this_url.replace(u, "http://xianguo.guoyuankezhan.com");
            //    window.location.href = ru;
            //    return;
            //}
            window.location.href = this_url;
        }

    })

    //初始化搜索按钮
    if ($(".inputsearch").length > 0) {
        $(".search-btn").on("click", function () {
            var v = $(this).parent().prev().children("input[type='search']").val().trim();
            window.location.href = "/m_page/mall/DiyMallSearch.aspx?title=" + v + "&cid=" + custID + "";
        })
    }

}

function IsPcOrWeb() {
    var b = navigator.userAgent;
    var reg = /(nokia|iphone|android|ipad|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220)/i
    return reg.test(b);
}

function IsWeiXinWeb() {
    return /MicroMessenger/i.test(window.navigator.userAgent);
}


String.prototype.getHtmlUrl = function () {

    //st
    var reg = /ProductInfo.aspx/i;
    var url = window.location.pathname;
    url = url.substr(url.lastIndexOf('.') + 1, url.length);
    var regurl = /^htm$|^html$/;
    if (reg.test(this.slice()) && Ishtml == "1") { //静态转移
        return "/Mall/Html/" + this.GetQueryString("custID") + "/Product/" + this.GetQueryString("ID") + ".htm?t=" + new Date().getTime();
    }

    if (Ishtml == "1" && reg.test(this.slice())) {
        return "/Mall/Html/" + this.GetQueryString("custID") + "/Product/" + this.GetQueryString("ID") + ".htm?t=" + new Date().getTime();
    }    
    return this.slice();
}

String.prototype.GetQueryString = function (name) {
    var reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)(&|$)");
    var r = unescape(this.slice().match(reg)[2]);
    if (r != null) return unescape(r); return null;
}

