document.write("<script src=\"/modeljs/layer.mobile/layer/layer-1.7.js\"></script>");

/*
 * 使用JSON参数说明
 * 
 type
类型：Number
默认：0，设置弹层的类型，0表示信息框，1表示页面层，2表示加载层
content
类型：String
必选参数，控制弹层内容
title
类型：String或Array
默认：空，控制层的标题，值为字符串或者数组
time
类型：Number
默认：无，控制自动关闭层所需秒数，支持整数和浮点数
style
类型：String
默认：空字符，控制层的样式
className
类型：String
默认：空字符，定义css类，用于自定义样式
btn
类型：Array
默认：空数组，控制显示的按钮，支持1-2个长度
shade
类型：Boolean
默认：true，是否显示遮罩
shadeClose
类型：Boolean
默认：true，是否点击遮罩时关闭层
anim
类型：Boolean
默认：true，是否动画弹出
fixed
类型：Boolean
默认：true，是否固定层的位置
top
类型：Number
默认：无，控制层的纵坐标，一般情况下不需要设置，因为层会始终垂直水平居中，只有当fixed:false时top才有效。
success
类型：Function
层成功弹出层的回调函数，返回一个参数为当前层元素对象
yes
类型：Function
点确定按钮触发的回调函数，返回一个参数为当前层的索引
no
类型：Function
点取消按钮触发的回调函数
cancel
类型：Function
点右上角关闭按钮触发的回调函数
end
类型：Function
层彻底销毁后的回调函数
*/

var $mlayer = {
    prompt: function (content, title, time) {
        return layer.open({
            title: title,
            content: content,
            time: time
        });
    },
    alert: function (content, btn, yesfu, title) {
        if ($mlayer.isExitsVar(btn) == false) { btn = ['确定']; }
        if ($mlayer.isExitsVar(yesfu) == false) { yesfu = function (i) { layer.close(i); } }
        return layer.open({
            title: title,
            content: content,
            shadeClose: false,
            btn: btn,
            yes: yesfu
        });
    },
    confirm: function (content, btn, yesfu, nofu) {
        if ($mlayer.isExitsVar(nofu) == false) { nofu = function (i) { layer.close(i); } }
        return layer.open({
            content: content,
            btn: btn,
            shadeClose: false,
            yes: yesfu,
            no: nofu
        });
    },
    page: function (html, style) {
        return layer.open({
            type: 1,
            content: html,
            shadeClose: false,
            style: style
        });
    },
    load: function () {
        return layer.open({ type: 2, shadeClose: false });
    },
    close: function (index) {
        layer.close(index);

    },
    closeAll: function () {
        layer.closeAll();
    },
    layerOptions: function (options) {
        return layer.open(options);
    },
    isExitsVar: function (s) {
        if (typeof (s) == "undefined" || s == null) { return false; }
        else { return true }
    }
};

