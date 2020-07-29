window.adoptag = window.adoptag || {cmd: []};
adoptag.adReady = !1;
adoptag.directAd = !1;
adoptag.delayTime = 5E3;
adoptag.atomUrl = "";
var eventify = function (a, c) {
    a.push = function (b) {
        Array.prototype.push.call(a, b);
        c(a)
    }
};
eventify(adoptag.cmd, function (a) {
    adoptag.runcmd(a)
});
adoptag.runcmd = function (a) {
    var c = a.length;
    for (i = 0; i < c; i++) a.shift()()
};
adoptag.display = function (a) {
    var c = document.getElementById(a), b = adopZonecd = adopWidth = adopHeight = "", f = !1, e = 0;
    if (c) {
        for (; c.firstChild;) c.firstChild.remove();
        b = c.getAttribute("_position");
        adopZonecd = c.getAttribute("_adop_zonecd");
        adopWidth = c.getAttribute("_width");
        adopHeight = c.getAttribute("_heigh");
        b && adopZonecd && adopWidth && adopHeight && (adoptag.adReady ? adoptag.directAd ? adoptag.adinfo.existad ? ("undefined" != typeof adoptag.adinfo.refreshtime && 0 < adoptag.adinfo.refreshtime && "popup" != b.toLowerCase() && "full" != b.toLowerCase() && "skin" != b.toLowerCase() && setTimeout(function () {
            adoptag.display(a)
        }, 1E3 * adoptag.adinfo.refreshtime), adoptag.adinfo.loadblock ? (adoptag.adinfo.adinfos.forEach(function (a, c) {
            b == a.location && (e = a.timer, adopWidth = a.width, adopHeight = a.height, f = !0)
        }), f && ("popup" == b.toLowerCase() || "full" == b.toLowerCase() ? adoptag.fullPopUpAdWrite(a, b, adopWidth, adopHeight, e) : "skin" == b.toLowerCase() ? adoptag.skinAdWrite(a, b, adopWidth, adopHeight) : adoptag.directAdWrite(a, b, adopWidth, adopHeight))) : (adoptag.adinfo.adinfos.forEach(function (a, c) {
            b == a.location && (e = a.timer, adopWidth = a.width, adopHeight = a.height, f = !0)
        }), f ? "popup" == b.toLowerCase() || "full" == b.toLowerCase() ? adoptag.fullPopUpAdWrite(a, b, adopWidth, adopHeight, e) : "skin" == b.toLowerCase() ? adoptag.skinAdWrite(a, b, adopWidth, adopHeight) : adoptag.directAdWrite(a, b, adopWidth, adopHeight) : "popup" != b.toLowerCase() && "full" != b.toLowerCase() && "skin" != b.toLowerCase() && adoptag.netAdWrite(a, adopZonecd, adopWidth, adopHeight, b))) : "popup" != b.toLowerCase() && "full" != b.toLowerCase() && "skin" != b.toLowerCase() && adoptag.netAdWrite(a, adopZonecd, adopWidth, adopHeight, b) : "popup" != b.toLowerCase() && "full" != b.toLowerCase() && "skin" != b.toLowerCase() && adoptag.netAdWrite(a, adopZonecd, adopWidth, adopHeight, b) : setTimeout(function () {
            adoptag.display(a)
        }, 100))
    }
};
adoptag.closePopUp = function (a) {
    if (a = document.getElementById(a)) a.style.display = "none"
};
adoptag.openPopUp = function (a) {
    if (a = document.getElementById(a)) a.style.display = "block"
};
adoptag.skinAdWrite = function (a, c, b, f) {
    b = document.getElementsByTagName("body");
    a = document.getElementById(a);
    if (b[0] && a) {
        b[0].setAttribute("class", "skinbanner_type");
        b = "adopB" + Math.floor(1E4 * Math.random()) + 1;
        var e = document.createElement("iframe"), d = "";
        e.setAttribute("id", b);
        e.setAttribute("frameborder", "0");
        e.setAttribute("marginwidth", "0");
        e.setAttribute("marginheight", "0");
        e.setAttribute("paddingwidth", "0");
        e.setAttribute("paddingheight", "0");
        e.setAttribute("scrolling", "no");
        e.setAttribute("style", "width:100%;height:" + f + "px;");
        a.appendChild(e);
        f = e.contentDocument || e.contentWindow.document;
        adoptag.adinfo.adinfos.forEach(function (a, b) {
            a.location == c && (d = atob(a.htmlcd))
        });
        null != f && (f.open(), f.write(d), f.close());
        "string" == typeof adoptag.paraminfo.device && "mobile" == adoptag.paraminfo.device.toLowerCase() || a.setAttribute("style", "position:fixed;display:block;min-width:1200px;height:975px;top:0;left:0;right:0;z-index:1;padding:0;overflow:hidden;")
    }
};
adoptag.fullPopUpAdWrite = function (a, c, b, f, e) {
    var d = document.getElementById(a);
    if (d) {
        var g = "adopB" + Math.floor(1E4 * Math.random()) + 1, h = document.createElement("iframe"),
            k = document.createElement("div"), l = "";
        h.setAttribute("id", g);
        h.setAttribute("frameborder", "0");
        h.setAttribute("marginwidth", "0");
        h.setAttribute("marginheight", "0");
        h.setAttribute("paddingwidth", "0");
        h.setAttribute("paddingheight", "0");
        h.setAttribute("scrolling", "no");
        h.setAttribute("style", "width:" + b + "px;height:" + f + "px;");
        d.appendChild(h);
        g = h.contentDocument || h.contentWindow.document;
        adoptag.adinfo.adinfos.forEach(function (a, b) {
            a.location == c && (l = atob(a.htmlcd))
        });
        null != g && (g.open(), g.write(l), g.close());
        g = parseInt((parseInt(window.innerWidth) - b) / 2);
        f = parseInt((parseInt(window.innerHeight) - f) / 2);
        1E3 > e && (e *= 1E3);
        "string" == typeof adoptag.paraminfo.device && "mobile" == adoptag.paraminfo.device.toLowerCase() ? "full" == c ? (d.style.display = "inline-block", d.style.width = "100%", d.style.height = "auto", h.style.width = "100%", h.onload = function () {
            h.style.height = h.contentWindow.document.body.scrollHeight + "px"
        }, setTimeout(function () {
            adoptag.closePopUp(a)
        }, e)) : "popup" == c && (d.setAttribute("style", "display:none;position:fixed;width:100%;height:100%;background-color:#000;left:0;top:0;overflow:hidden;opacity:1;padding-top:40px;z-index:99999;"), h.style.width = "100%", h.style.height = "910px", k.innerHTML = "<button style='color:white;background-color:black;border:0;outline: 0;position:absolute;top:0px;right:0px;font-size:30px;z-index:999999;' onclick='adoptag.closePopUp(\"" + a + "\")'>X</button>", d.appendChild(k), setTimeout(function () {
            adoptag.openPopUp(a)
        }, e)) : "full" == c ? (d.setAttribute("style", "width:100%;text-align:center;"), d.style.margin = "20px 0", setTimeout(function () {
            adoptag.closePopUp(a)
        }, e)) : (d.setAttribute("style", "display:none;position:fixed;width:100%;height:100%;background-color:#000;left:0;top:0;overflow:hidden;opacity:1;padding-left:" + g + "px;padding-top:" + f + "px;z-index:99999;"), k.innerHTML = "<button style='color:white;background-color:black;border:0;outline: 0;position:absolute;top:" + (f - 40) + "px;left:" + (parseInt(b) + parseInt(g) + 10) + "px;font-size:30px;z-index:999999;' onclick='adoptag.closePopUp(\"" + a + "\")'>X</button>", d.appendChild(k), setTimeout(function () {
            adoptag.openPopUp(a)
        }, e))
    }
};
adoptag.directAdWrite = function (a, c, b, f) {
    if (a = document.getElementById(a)) {
        var e = "adopB" + Math.floor(1E4 * Math.random()) + 1, d = document.createElement("iframe"), g = "";
        d.setAttribute("id", e);
        d.setAttribute("frameborder", "0");
        d.setAttribute("marginwidth", "0");
        d.setAttribute("marginheight", "0");
        d.setAttribute("paddingwidth", "0");
        d.setAttribute("paddingheight", "0");
        d.setAttribute("scrolling", "no");
        d.setAttribute("style", "width:" + b + "px;height:" + f + "px;");
        a.style.width = "100%";
        a.style.textAlign = "center";
        a.style.display = "block";
        a.style.maxHeight = "none";
        a.appendChild(d);
        b = d.contentDocument || d.contentWindow.document;
        adoptag.adinfo.adinfos.forEach(function (a, b) {
            a.location == c && (g = atob(a.htmlcd))
        });
        null != b && (b.open(), b.write(g), b.close());
        "string" == typeof adoptag.paraminfo.device && "mobile" == adoptag.paraminfo.device.toLowerCase() ? "top" == c ? (a.style.display = "inline-block", a.style.width = "100%", a.style.height = "auto", d.style.width = "100%", d.style.height = "auto", d.onload = function () {
            d.style.height = d.contentWindow.document.body.scrollHeight + "px"
        }) : "footer" == c ? (a.style.display = "inline-block", a.style.width = "100%", a.style.textAlign = "center", a.style.position = "fixed", a.style.bottom = "0", a.style.height = f + "px") : "inread" == c && (a.style.display = "inline-block", a.style.width = "100%", a.style.height = "auto", a.style.textAlign = "center", d.style.width = "96%", d.onload = function () {
            d.style.height = d.contentWindow.document.body.scrollHeight + "px"
        }) : "top" == c ? a.style.padding = "20px 0" : "footer" == c ? a.style.margin = "0 0 20px" : "inread" == c && (a.style.margin = "20px 0")
    }
};
adoptag.netAdWrite = function (a, c, b, f, e) {
    if (a = document.getElementById(a)) {
        var d = document.createElement("script");
        d.src = "//compass.adop.cc/assets/js/adop/adopJ.js?v=14";
        d.async = !0;
        var g = document.createElement("ins");
        g.setAttribute("class", "adsbyadop");
        g.setAttribute("_adop_zon", c);
        g.setAttribute("_adop_type", "re");
        g.setAttribute("style", "display:inline-block;width:" + b + "px;height:" + f + "px;");
        g.setAttribute("_page_url", "");
        a.style.width = "100%";
        a.style.textAlign = "center";
        a.appendChild(g);
        a.appendChild(d);
        a.style.display = "block";
        a.style.maxHeight = "none";
        "string" == typeof adoptag.paraminfo.device && "mobile" == adoptag.paraminfo.device.toLowerCase() ? "inread" == e ? (g.style.width = "300px", g.style.height = "250px") : "footer" == e && (a.style.position = "fixed", a.style.bottom = "0", a.style.height = f + "px") : "top" == e ? a.style.padding = "20px 0" : "inread" == e ? a.style.margin = "20px 0" : "footer" == e && (a.style.margin = "0 0 20px")
    }
};
adoptag.changeCate = function (a) {
    adoptag.paraminfo.cate = a
};
adoptag.defineAdinfo = function (a) {
    "undefined" == typeof a.device && (a.device = adoptag.getDeviceType());
    "undefined" == typeof a.url && (a.url = encodeURIComponent(location.href));
    adoptag.paraminfo = a
};
adoptag.makeSendData = function () {
    return JSON.stringify(adoptag.paraminfo)
};
adoptag.sync = function () {
    adoptag.loadadandset(adoptag.atomUrl)
};
adoptag.getDeviceType = function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "mobile" : "pc"
};
adoptag.defineAtomUrl = function (a) {
    adoptag.atomUrl = atob(a.substr(1))
};
adoptag.loadadandset = function (a) {
    adoptag.adReady = !1;
    adoptag.directAd = !1;
    var c = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    setTimeout(function () {
        adoptag.adReady = !0
    }, adoptag.delayTime);
    c.onreadystatechange = function () {
        c.readyState == c.DONE && 200 == c.status && (adoptag.adinfo = JSON.parse(c.responseText), 0 == adoptag.adReady && "object" == typeof adoptag.adinfo && (adoptag.directAd = !0, adoptag.adReady = !0, "undefined" != typeof adoptag.adinfo.refreshtime && 0 < adoptag.adinfo.refreshtime && setTimeout(function () {
        }, 1E3 * (adoptag.adinfo.refreshtime - 3))))
    };
    c.open("POST", a, !0);
    c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    c.send(encodeURI("object=" + adoptag.makeSendData()))
};
adoptag.runcmd(adoptag.cmd);