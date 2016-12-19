
/*
 * OrderLayre(
            {
                data: OpstJson, //JSON
                time: 2000, // 打开时间
                ctime: 2000, // 停留时间
                ranval: 60, // 显示随机 时分秒 
                timeName: ["分", "秒","时"] // 
            });
 *
 *
*/
var OrderLayre = function (options) {
    if (options == null || typeof (options) == "undefined")
    { console.log("缺少参数"); return; }
    if (options.data == null || options.data == "") {
        return;
    }
    if (options.ranval > 60) { return; }
    var jsonLeng = options.data.length;
    var optionsLeng = options.timeName.length;
    var _Html = '<div class="order-layre">' +
                       '<div class="order-layre-info">' +
                       '    <div class="order-layre-logo">' +
                       '        <img src="" />' +
                       '    </div>' +
                       '    <div class="order-layre-msg">' +
                       '        <span class="order-layre-msg-info"></span>' +
                       '        <span class="order-layre-msg-time"></span>' +
                       '    </div>' +
                       '</div>';
    $(document.body).append(_Html);

    function openLayre() {
        setTimeout(function () {
            //获取随机值
            var timeName = options.timeName[random(0, optionsLeng)];
            var logoOrName = options.data[random(0, jsonLeng)];
            $(".order-layre-logo > img").attr("src", logoOrName.logo);
            if (custID == "100781" || custID == "100880") {
                $(".order-layre-msg-info").text(logoOrName.name + "提现了" + logoOrName.money + "到(" + logoOrName.moneyType + ")");
                $(".order-layre-msg-time").text(random(3, options.ranval) + timeName + "前");
            }
            else {
                $(".order-layre-msg-info").text(logoOrName.name + "下了一笔订单");
                $(".order-layre-msg-time").text(random(3, options.ranval) + timeName + "前");
            }
            $(".order-layre").removeClass("order-layre-out")
            .addClass("order-layre-open");
            closeLayre();
        }, options.time)
    };

    function closeLayre() {
        setTimeout(function () {
            $(".order-layre").removeClass("order-layre-open")
            .addClass("order-layre-out");
            openLayre();
        }, options.ctime);
    };

    function random(Min, Max) {
        return Math.floor(Min + Math.random() * (Max - Min));
    };

    openLayre();
}