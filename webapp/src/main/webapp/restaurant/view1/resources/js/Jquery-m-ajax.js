
var ajax_m_rqurl = "/SER_ASHX/SER_AppReques.ashx";
var _ajax_AppSenIndex = 0;
/*二次封装处理 不建议调用该方法*/
$.ajaxMain = function (url, d, v, sufn, msg, notAsync, cache, erfu, dataType) {
    if (typeof (url) == "undefined" || url == null) { url = ajax_m_rqurl; }
    if (typeof (msg) == "undefined" || msg == null) { msg = "正在执行您的操作,请稍候..."; }
    if (typeof (notAsync) == "undefined") { notAsync = true; }
    if (typeof (cache) == "undefined") { cache = false; }
    if (typeof (erfu) == "undefined") { erfu = function () { }; }
    $.ajax({
        type: "POST",
        url: url,
        beforeSend: function () { if (msg != "c_s") { _ajax_AppSenIndex = $mlayer.load(); } },
        data: { "D": d, "V": v },
        dataType: dataType,
        cache: cache,
        timeout: 20000, //超时20秒就打开加载..
        async: notAsync,
        success: sufn,
        error: erfu,
        complete: function (XHR, TS) {
            XHR = null;
            if (msg != 'c_s') { if (TS == "success") { $.ColseAjaxMsg(); } } //自动关闭
            if (TS == 'timeout') { $mlayer.prompt("服务器已经超时,刷新重试"); }
        }
    });
}
/*二次封装查询 不建议调用该方法*/
$.ajaxQueryMain = function (url, d, v, sufn, msg, notAsync, cache, erfu, dataType) {
    if (typeof (url) == "undefined" || url == null) { url = ajax_m_rqurl; }
    if (typeof (msg) == "undefined" || msg == null) { msg = "加载中..."; }
    if (typeof (notAsync) == "undefined") { notAsync = true; }
    if (typeof (cache) == "undefined") { cache = false; }
    if (typeof (erfu) == "undefined") { erfu = function () { }; }
    $.ajax({
        type: "POST",
        url: url,
        data: { "D": d, "V": v },
        dataType: dataType,
        timeout: 20000, //超时20秒就打开加载..
        cache: cache,
        async: notAsync,
        success: sufn,
        error: erfu,
        complete: function (XHR, TS) {
            XHR = null;
            if (TS == "success") { $.ColseAjaxMsg(); }
            if (TS == 'timeout') { $mlayer.prompt("服务器已经超时,刷新重试"); }
        }
    });
}


$.extend({
    /*可用于业务逻辑返回JOSN格式*/
    AjaxJson: function (d, v, sufn, msg, notAsync, cache, erfu) {
        $.ajaxMain(null, d, v, sufn, msg, notAsync, cache, erfu, "json");
    },
    AjaxJsonURL: function (url, d, v, sufn, msg, notAsync, cache, erfu) {
        $.ajaxMain(url, d, v, sufn, msg, notAsync, cache, erfu, "json");
    },
    /*可用于业务逻辑返回TEXT格式*/
    AjaxText: function (d, v, sufn, msg, notAsync, cache, erfu) {
        $.ajaxMain(null, d, v, sufn, msg, notAsync, cache, erfu, "text");
    },
    AjaxTextURL: function (url, d, v, sufn, msg, notAsync, cache, erfu) {
        $.ajaxMain(url, d, v, sufn, msg, notAsync, cache, erfu, "text");
    },
    /*可用于数据查询返回JOSN格式*/
    AjaxQueryJson: function (d, v, sufn, msg, notAsync, cache, erfu) {
        $.ajaxQueryMain(null, d, v, sufn, msg, notAsync, cache, erfu, "json");
    },
    AjaxQueryJsonURL: function (url, d, v, sufn, msg, notAsync, cache, erfu) {
        $.ajaxQueryMain(url, d, v, sufn, msg, notAsync, cache, erfu, "json");
    },
    /*可用于数据查询返回TEXT格式*/
    AjaxQueryText: function (d, v, sufn, msg, notAsync, cache, erfu) {
        $.ajaxQueryMain(null, d, v, sufn, msg, notAsync, cache, erfu, "text");
    },
    AjaxQueryTextURL: function (url, d, v, sufn, msg, notAsync, cache, erfu) {
        $.ajaxQueryMain(url, d, v, sufn, msg, notAsync, cache, erfu, "text");
    },
    ColseAjaxMsg: function () { $mlayer.close(_ajax_AppSenIndex); },
    GoUrl: function (url) { window.location.href = url }
})
/*分页使用*/
$.AjaxPage = function (d, v, p, sufn, msg, notAsync, cache, erfu) {
    if (typeof (msg) == "undefined" || msg == null) { msg = "玩命加载中..."; }
    if (typeof (notAsync) == "undefined") { notAsync = true; }
    if (typeof (cache) == "undefined") { cache = false; }
    if (typeof (erfu) == "undefined") { erfu = function () { }; }
    $.ajax({
        type: "POST",
        url: ajax_m_rqurl,
        data: { "D": d, "V": v, "P": p },
        dataType: "JSON",
        timeout: 20000, //超时20秒就打开加载..
        cache: cache,
        async: notAsync,
        success: sufn,
        error: erfu,
        complete: function (XHR, TS) {
            if (TS == "success") { $.ColseAjaxMsg(); }
            if (TS == 'timeout') { $mlayer.prompt("服务器已经超时,刷新重试"); }
            XHR = null;
        }
    });
}

//beforeSend
$.AjaxNextPage = function (d, v, p, sufn, besendormsg, notAsync, cache, erfu) {
    if (typeof (besendormsg) == "undefined" || besendormsg == null) {
        if (typeof (besendormsg) != "function") {
            besendormsg = function () {
                if (besendormsg != "c_s") { _ajax_AppSenIndex = $mlayer.load(); }
            }
        }
    }
    if (typeof (notAsync) == "undefined") { notAsync = true; }
    if (typeof (cache) == "undefined") { cache = false; }
    if (typeof (erfu) == "undefined") { erfu = function () { }; }
    $.ajax({
        type: "POST",
        url: ajax_m_rqurl,
        data: { "D": d, "V": v, "P": p },
        beforeSend: besendormsg,
        dataType: "JSON",
        timeout: 20000, //超时3秒就打开加载..
        cache: cache,
        async: notAsync,
        success: sufn,
        error: erfu,
        complete: function (XHR, TS) {
            if (TS == "success") { $.ColseAjaxMsg(); }
            if (TS == 'timeout') { $mlayer.prompt("服务器已经超时,刷新重试"); }
            XHR = null;
        }
    });
}




function SDS(str) {
    return escape(encodeURIComponent(str));
}

function SDI(arrtObjs) {
    try {
        var decodVues = "A";
        for (var i = 0; i < arrtObjs.length; i++) {
            decodVues += escape(encodeURIComponent(arrtObjs[i])) + "$";
        }
        return decodVues.substring(1, decodVues.length - 1).substring(0, decodVues.length - 1);
    } catch (ex) { return "异常错误：可能输入的不是数组" + ex; }
}

String.prototype.Format = function () {
    if (arguments.length == 0) return this;
    for (var s = this, i = 0; i < arguments.length; i++)
        s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
    return s;
};