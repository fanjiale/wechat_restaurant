//window.onerror = function () { return true; } /*容错性*/

function Ibayton() {
    var xmlPool = new Array;
    var xmlVersion = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
    if (arguments[0]) this.url = arguments[0];
    else this.url = "";
    if (arguments[1]) this.oncomplete = arguments[1];
    else this.oncomplete = function (obj) {
        return
    };
    if (arguments[2]) this.content = arguments[2];
    else this.content = "";
    if (arguments[3]) this.method = arguments[3];
    else this.method = "POST";
    if (arguments[4]) this.async = arguments[4];
    else this.async = true;
    if (!getObj()) return false;
    function getObj() {
        var i;
        for (i = 0; i < xmlPool.length; i++) if (xmlPool[i].readystate == 4) return xmlPool[i];
        var tmpObj;
        try {
            tmpObj = new XMLHttpRequest;
        }
        catch (e) {
            for (i = 0; i < xmlVersion.length; i++) {
                try {
                    tmpObj = new ActiveXObject(xmlVersion[i]);
                }
                catch (e2) {
                    continue;
                }
                break;
            }
        }
        if (!tmpObj) return false;
        else {
            xmlPool[xmlPool.length] = tmpObj;
            return xmlPool[xmlPool.length - 1];
        }
    }
    this.send = function () {
        var purl, pcbf, pc, pm, pa, xmlObj;
        xmlObj = getObj();
        if (!xmlObj) return false;
        if (arguments[0]) purl = arguments[0];
        else purl = this.url;
        if (arguments[1]) pc = arguments[1];
        else pc = this.content;
        if (arguments[2]) pcbf = arguments[2];
        else pcbf = this.oncomplete;
        if (arguments[3]) pm = arguments[3];
        else pm = this.method;
        if (arguments[4]) pa = arguments[4];
        else pa = this.async;
        if (!pm || !purl || !pa) return false;
        xmlObj.open(pm, purl, pa);
        if (pm == "POST") xmlObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlObj.onreadystatechange = function () {
            if (xmlObj.readyState == 4) {
                if (xmlObj.status == 200)
                    pcbf(xmlObj);
                else
                    pcbf(null);
            }
        }
        if (pm == "POST") xmlObj.send(pc);
        else xmlObj.send("");
    }
    this.get = function () {
        var purl, pcbf;
        if (arguments[0]) purl = arguments[0];
        else purl = this.url;
        if (arguments[1]) pcbf = arguments[1];
        else pcbf = this.oncomplete;
        if (!purl && !pcbf) return false;
        this.send(purl, "", pcbf, "GET", true);
    }
    this.post = function () {
        var purl, pcbf, pc;
        if (arguments[0]) purl = arguments[0];
        else purl = this.url;
        if (arguments[1]) pcbf = arguments[1];
        else pcbf = this.oncomplete;
        if (arguments[2]) pc = arguments[2];
        else pc = "";
        if (!purl && !pcbf) return false;
        this.send(purl, pc, pcbf, "POST", true);
    }
}

var Url = "";
var splitStr = "@%%@";
//类型，参数，执行函数
function ExecAJ(type) {
    var query = (arguments.length>1) ? arguments[1] : null;
    var execFun = (arguments.length>2) ? arguments[2] : null;
    var parameter = (arguments.length > 3) ? arguments[3] : null;
    var PostUrl = (arguments.length > 4) ? arguments[4] : this.Url;

    var AjaxObj = new Ibayton;
    this.ReStr = "";
    AjaxObj.post
    (
    PostUrl,
    function (obj) {
        if (execFun != null && execFun != "") {
            var responseText = unescape(obj.responseText);
            eval(execFun + "(responseText,parameter,query,type)");
        }
    },
    ReQuery(type, query)
    );
    AjaxObj = null;
}

function ReQuery(type, query) {
    try {
        var queryString = type;
        if (query != null && query != "") {
            for (i = 0; i < query.length; i++) {
                queryString += this.splitStr + Escape(query[i]);
            }
        }
        return queryString;
    }
    catch (e) {
        return type;
    }
}
function Escape(str) {
    return escape(encodeURIComponent(str));
}