(function () {
    var n = this, aa = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }, ba = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, ca = function (a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }, p = function (a, b, c) {
        p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
            ba : ca;
        return p.apply(null, arguments)
    }, r = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }, u = Date.now || function () {
            return +new Date
        }, da = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.Xa = b.prototype;
        a.prototype = new c;
        a.Va = function (a, c, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)g[h - 2] = arguments[h];
            return b.prototype[c].apply(a, g)
        }
    };
    var ea = (new Date).getTime();
    var x = function (a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    }, fa = function (a, b) {
        var c = parseInt(a, 10);
        return isNaN(c) ? b : c
    }, y = function (a, b) {
        return /^true$/.test(a) ? !0 : /^false$/.test(a) ? !1 : b
    }, ga = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/, ia = function (a, b) {
        if (!a)return b;
        var c = a.match(ga);
        return c ? c[0] : b
    };
    var ja = fa("101", -1), ka = fa("98", 0), la = x("0.05"), ma = x("0.001"), na = x("0.001"), oa = y("true", !0), pa = x(""), qa = x("0.001"), ra = x("0.0"), sa = x(""), ta = x("0.1");
    var ua = function () {
        return "r20160209"
    }, wa = y("false", !1), xa = y("false", !1), ya = y("false", !1), za = ya || !xa;
    var Aa = function (a) {
        Aa[" "](a);
        return a
    };
    Aa[" "] = function () {
    };
    var Ba = function (a) {
            try {
                var b;
                if (b = !!a && null != a.location.href)a:{
                    try {
                        Aa(a.foo);
                        b = !0;
                        break a
                    } catch (c) {
                    }
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        }, Ca = function (a, b) {
            var c = a.createElement("script");
            c.src = b;
            var d = a.getElementsByTagName("script")[0];
            return d && d.parentNode ? (d.parentNode.insertBefore(c, d), c) : null
        }, Da = function (a, b) {
            return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
        }, Fa = function (a, b) {
            if (!(1E-4 > Math.random())) {
                var c = Math.random();
                if (c < b)return c = Ea(window), a[Math.floor(c * a.length)]
            }
            return null
        },
        Ea = function (a) {
            try {
                var b = new Uint32Array(1);
                a.crypto.getRandomValues(b);
                return b[0] / 65536 / 65536
            } catch (c) {
                return Math.random()
            }
        }, Ga = function (a, b) {
            for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        }, Ha = function (a) {
            var b = a.length;
            if (0 == b)return 0;
            for (var c = 305419896, d = 0; d < b; d++)c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        }, Ia = /^([0-9.]+)px$/, Ja = /^(-?[0-9.]{1,30})$/, Ka = function (a) {
            return Ja.test(a) && (a = Number(a), !isNaN(a)) ? a : null
        }, La = function (a) {
            return (a =
                Ia.exec(a)) ? +a[1] : null
        };
    var Ma = function (a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    };
    var Pa = function (a, b, c, d, e, f) {
        try {
            if ((d ? a.ca : Math.random()) < (e || a.U)) {
                var g = a.S + b + ("&" + Na(c, 1)), g = g.substring(0, 2E3);
                "undefined" === typeof f ? Oa(g) : Oa(g, f)
            }
        } catch (h) {
        }
    }, Na = function (a, b) {
        var c = [];
        Ga(a, function (a, e) {
            var f = null;
            if (aa(a) && 2 > b)f = Na(a, b + 1); else if (0 === a || a)f = String(a);
            f && c.push(e + "=" + encodeURIComponent(f))
        });
        return c.join("&")
    }, Oa = function (a, b) {
        n.google_image_requests || (n.google_image_requests = []);
        var c = n.document.createElement("img");
        if (b) {
            var d = function (a) {
                b(a);
                a = d;
                c.removeEventListener ?
                    c.removeEventListener("load", a, !1) : c.detachEvent && c.detachEvent("onload", a);
                a = d;
                c.removeEventListener ? c.removeEventListener("error", a, !1) : c.detachEvent && c.detachEvent("onerror", a)
            };
            Ma(c, "load", d);
            Ma(c, "error", d)
        }
        c.src = a;
        n.google_image_requests.push(c)
    };
    var Qa = function (a, b, c) {
        this.$ = a;
        this.W = b;
        this.G = c;
        this.B = null;
        this.V = this.o;
        this.ia = !1
    }, Ra = function (a, b, c) {
        this.message = a;
        this.fileName = b || "";
        this.lineNumber = c || -1
    }, Sa = function (a) {
        z.B = a
    }, Ua = function (a, b, c, d, e, f) {
        var g;
        try {
            g = c()
        } catch (k) {
            var h = a.G;
            try {
                var l = Ta(k), h = (f || a.V).call(a, b, l, void 0, d)
            } catch (m) {
                a.o("pAR", m)
            }
            if (!h)throw k;
        } finally {
            if (e)try {
                e()
            } catch (k) {
            }
        }
        return g
    }, B = function (a, b, c) {
        var d = z;
        return function () {
            var e = arguments;
            return Ua(d, a, function () {
                return b.apply(void 0, e)
            }, void 0, c)
        }
    };
    Qa.prototype.o = function (a, b, c, d, e) {
        var f = {};
        f.context = a;
        b instanceof Ra || (b = Ta(b));
        f.msg = b.message.substring(0, 512);
        b.fileName && (f.file = b.fileName);
        0 < b.lineNumber && (f.line = b.lineNumber.toString());
        a = n.document;
        f.url = a.URL.substring(0, 512);
        f.ref = a.referrer.substring(0, 512);
        Va(this, f, d);
        Pa(this.$, e || this.W, f, this.ia, c);
        return this.G
    };
    var Va = function (a, b, c) {
        if (a.B)try {
            a.B(b)
        } catch (d) {
        }
        if (c)try {
            c(b)
        } catch (d) {
        }
    }, Ta = function (a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            var c = a.stack, d = b;
            try {
                -1 == c.indexOf(d) && (c = d + "\n" + c);
                for (var e; c != e;)e = c, c = c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = c.replace(/\n */g, "\n")
            } catch (f) {
                b = d
            }
        }
        return new Ra(b, a.fileName, a.lineNumber)
    };
    var Wa = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }, Xa = /&/g, Ya = /</g, Za = />/g, $a = /"/g, ab = /'/g, bb = /\x00/g, cb = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "<"
    }, db = {"'": "\\'"}, eb = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var fb = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = "string" == typeof a ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
    };
    var C;
    a:{
        var gb = n.navigator;
        if (gb) {
            var hb = gb.userAgent;
            if (hb) {
                C = hb;
                break a
            }
        }
        C = ""
    }
    var E = function (a) {
        return -1 != C.indexOf(a)
    };
    var ib = function () {
        return E("Opera") || E("OPR")
    };
    var jb = ib(), F = E("Trident") || E("MSIE"), kb = E("Edge"), lb = E("Gecko") && !(-1 != C.toLowerCase().indexOf("webkit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"), mb = -1 != C.toLowerCase().indexOf("webkit") && !E("Edge"), nb = function () {
        var a = C;
        if (lb)return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (kb)return /Edge\/([\d\.]+)/.exec(a);
        if (F)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (mb)return /WebKit\/(\S+)/.exec(a)
    }, ob = function () {
        var a = n.document;
        return a ? a.documentMode : void 0
    }, pb = function () {
        if (jb && n.opera) {
            var a;
            var b = n.opera.version;
            try {
                a = b()
            } catch (c) {
                a = b
            }
            return a
        }
        a = "";
        (b = nb()) && (a = b ? b[1] : "");
        return F && (b = ob(), null != b && b > parseFloat(a)) ? String(b) : a
    }(), qb = {}, rb = function (a) {
        if (!qb[a]) {
            for (var b = 0, c = Wa(String(pb)).split("."), d = Wa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "", h = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), k = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var m = l.exec(g) || ["", "", ""], q = k.exec(h) || ["", "", ""];
                    if (0 == m[0].length && 0 == q[0].length)break;
                    b = eb(0 == m[1].length ? 0 : parseInt(m[1],
                            10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || eb(0 == m[2].length, 0 == q[2].length) || eb(m[2], q[2])
                } while (0 == b)
            }
            qb[a] = 0 <= b
        }
    }, sb = n.document, tb = sb && F ? ob() || ("CSS1Compat" == sb.compatMode ? parseInt(pb, 10) : 5) : void 0;
    var ub;
    if (!(ub = !lb && !F)) {
        var vb;
        if (vb = F)vb = 9 <= Number(tb);
        ub = vb
    }
    ub || lb && rb("1.9.1");
    F && rb("9");
    var wb = document, J = window;
    var xb = Object.prototype.hasOwnProperty, yb = function (a, b) {
        for (var c in a)xb.call(a, c) && b.call(void 0, a[c], c, a)
    }, K = function (a) {
        return !(!a || !a.call) && "function" === typeof a
    }, zb = function (a, b) {
        for (var c = 1, d = arguments.length; c < d; ++c)a.push(arguments[c])
    }, M = function (a, b) {
        if (a.indexOf) {
            var c = a.indexOf(b);
            return 0 < c || 0 === c
        }
        for (c = 0; c < a.length; c++)if (a[c] === b)return !0;
        return !1
    }, Ab = function (a) {
        a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
    }, Bb = /(^| )adsbygoogle($| )/, Cb = {
        "http://googleads.g.doubleclick.net": !0,
        "http://pagead2.googlesyndication.com": !0,
        "https://googleads.g.doubleclick.net": !0,
        "https://pagead2.googlesyndication.com": !0
    }, Db = /\.google\.com(:\d+)?$/, Eb = function () {
        return wa && window.google_cafe_host || ia("", "pagead2.googlesyndication.com")
    }, Fb = function (a) {
        a = wa && a.google_top_window || a.top;
        return Ba(a) ? a : null
    };
    var Gb, z;
    Gb = new function () {
        this.S = "http" + ("http:" === J.location.protocol ? "" : "s") + "://pagead2.googlesyndication.com/pagead/gen_204?id=";
        this.U = .01;
        this.ca = Math.random()
    };
    z = new Qa(Gb, "jserror", !0);
    var Ib = function () {
        var a = [Hb];
        Sa(function (b) {
            fb(a, function (a) {
                a(b)
            })
        })
    }, Jb = function (a, b, c, d) {
        Ua(z, a, c, d, void 0, b)
    }, Kb = z.o, Lb = function (a, b, c) {
        Pa(Gb, a, b, "jserror" != a, c, void 0)
    }, Nb = function (a) {
        return B("aa:reactiveTag", a, void 0)
    };
    var Ob = function (a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };
    var Pb = function (a) {
        var b;
        try {
            b = parseInt(a.localStorage.getItem("google_experiment_mod"), 10)
        } catch (c) {
            return null
        }
        if (0 <= b && 1E3 > b)return b;
        b = Math.floor(1E3 * Ea(a));
        try {
            return a.localStorage.setItem("google_experiment_mod", "" + b), b
        } catch (c) {
            return null
        }
    };
    var Qb = null, Rb = function () {
        if (!Qb) {
            for (var a = window, b = a, c = 0; a && a != a.parent;)if (a = a.parent, c++, Ba(a))b = a; else break;
            Qb = b
        }
        return Qb
    };
    var N = {
        oa: {},
        Ua: {j: "453848100", i: "453848101"},
        Ea: {j: "828064124", ta: "828064125", ua: "828064172", wa: "828064173"},
        Da: {j: "828064127", i: "828064128"},
        Fa: {j: "828064170", i: "828064171"},
        Ia: {j: "24819308", i: "24819309", la: "24819320", ra: "24819321"},
        Ha: {j: "24819330", i: "24819331"},
        Ka: {j: "828064162", i: "828064163"},
        Ja: {j: "828064164", i: "828064165", xa: "828064166"},
        Aa: {j: "86724438", i: "86724439"},
        Ba: {j: "828064190", i: "828064191"},
        Oa: {j: "10573505", i: "10573506"},
        w: {j: "10573595", i: "10573596"},
        Sa: {j: "10573511", i: "10573512"},
        A: {j: "10573581", i: "10573582"},
        Na: {j: "312815006", i: "312815007"},
        v: {j: "312815106", i: "312815107"},
        pa: {j: "26835105", i: "26835106"},
        za: {j: "35923720", i: "35923721"},
        H: {j: "35923760", i: "35923761"},
        I: {j: "20040000", i: "20040001"},
        ma: {j: "20040016", i: "20040017"},
        ya: {j: "828064202", i: "828064203"},
        La: {j: "19188000", i: "19188001"},
        Ma: {j: "20040026", i: "20040027"},
        na: {ka: "314159230", Ga: "314159231"},
        Ca: {Pa: "27285692", Ra: "27285712", Qa: "27285713"},
        Ta: {j: "111849357", va: "111849358", sa: "111849359"},
        qa: {j: "29222046", i: "29222047"}
    };
    var Sb = function () {
    }, Ub = function (a, b, c) {
        switch (typeof b) {
            case "string":
                Tb(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (null == b) {
                    c.push("null");
                    break
                }
                if (b instanceof Array || void 0 != b.length && b.splice) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++)c.push(e), Ub(a, b[f], c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (e in b)b.hasOwnProperty(e) && (f = b[e], "function" != typeof f &&
                (c.push(d), Tb(e, c), c.push(":"), Ub(a, f, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }, Vb = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }, Wb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g, Tb = function (a, b) {
        b.push('"');
        b.push(a.replace(Wb, function (a) {
            if (a in Vb)return Vb[a];
            var b = a.charCodeAt(0), e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return Vb[a] =
                e + b.toString(16)
        }));
        b.push('"')
    };
    var Xb = E("Safari") && !((E("Chrome") || E("CriOS")) && !ib() && !E("Edge") || E("Coast") || ib() || E("Edge") || E("Silk") || E("Android")) && !(E("iPhone") && !E("iPod") && !E("iPad") || E("iPad") || E("iPod"));
    var Yb = null, Zb = lb || mb && !Xb || jb || "function" == typeof n.btoa;
    var $b = {
        google_ad_modifications: !0,
        google_analytics_domain_name: !0,
        google_analytics_uacct: !0
    }, ac = function (a) {
        a.google_page_url && (a.google_page_url = String(a.google_page_url));
        var b = [];
        yb(a, function (a, d) {
            if (null != a) {
                var e;
                try {
                    var f = [];
                    Ub(new Sb, a, f);
                    e = f.join("")
                } catch (g) {
                }
                e && (e = e.replace(/\//g, "\\$&"), zb(b, d, "=", e, ";"))
            }
        });
        return b.join("")
    };
    var bc = function (a, b, c) {
        Jb("files::getSrc", Kb, function () {
            if ("https:" == J.location.protocol && "http" == c)throw c = "https", Error("Requested url " + a + b);
        });
        return [c, "://", a, b].join("")
    }, cc = function (a, b, c) {
        c || (c = za ? "https" : "http");
        return bc(a, b, c)
    };
    var O = function (a) {
        return (a = a.google_ad_modifications) ? a.loeids || [] : []
    }, dc = function (a, b, c) {
        if (!a)return null;
        for (var d = 0; d < a.length; ++d)if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c)return a[d];
        return null
    };
    var ec = function (a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        Lb("ama", b, .01)
    };
    var fc = {overlays: 1, interstitials: 2, vignettes: 2, inserts: 3, immersives: 4};
    var P = function (a) {
        a = a.document;
        return ("CSS1Compat" == a.compatMode ? a.documentElement : a.body) || {}
    };
    var gc = new function () {
        this.aa = new Ob(100, 199)
    };
    var hc = function (a, b, c) {
        return J.location && J.location.hash == "#google_plle_" + c ? c : Fa([b, c], a)
    }, ic = function (a, b, c, d) {
        a = a.google_active_plles = a.google_active_plles || [];
        M(O(b), c) ? a.push(c) : M(O(b), d) && a.push(d)
    };
    var jc = function () {
        return !(E("iPad") || E("Android") && !E("Mobile") || E("Silk")) && (E("iPod") || E("iPhone") || E("Android") || E("IEMobile"))
    };
    var kc = function (a) {
        this.m = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {handlers: {}, upd: p(this.ha, this)});
        this.ea = a.google_iframe_oncopy
    }, lc;
    var Q = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
    /[\x00&<>"']/.test(Q) && (-1 != Q.indexOf("&") && (Q = Q.replace(Xa, "&amp;")), -1 != Q.indexOf("<") && (Q = Q.replace(Ya, "&lt;")), -1 != Q.indexOf(">") && (Q = Q.replace(Za, "&gt;")), -1 != Q.indexOf('"') && (Q = Q.replace($a, "&quot;")), -1 != Q.indexOf("'") && (Q = Q.replace(ab, "&#39;")), -1 != Q.indexOf("\x00") && (Q = Q.replace(bb, "&#0;")));
    lc = Q;
    kc.prototype.set = function (a, b) {
        this.ea.handlers[a] = b;
        this.m.addEventListener && this.m.addEventListener("load", p(this.X, this, a), !1)
    };
    kc.prototype.X = function (a) {
        a = this.m.document.getElementById(a);
        try {
            var b = a.contentWindow.document;
            if (a.onload && b && (!b.body || !b.body.firstChild))a.onload()
        } catch (c) {
        }
    };
    kc.prototype.ha = function (a, b) {
        var c = mc("rx", a), d;
        a:{
            if (a && (d = a.match("dt=([^&]+)")) && 2 == d.length) {
                d = d[1];
                break a
            }
            d = ""
        }
        d = (new Date).getTime() - d;
        c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= d ? "M" : 0 <= d ? d : "-M"));
        this.set(b, c);
        return c
    };
    var mc = function (a, b) {
        var c = new RegExp("\\b" + a + "=(\\d+)"), d = c.exec(b);
        d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
        return b
    };
    lb || mb || F && rb(11);
    var nc = !1, oc = function (a, b, c) {
        var d = ["<iframe"], e;
        for (e in a)a.hasOwnProperty(e) && zb(d, e + "=" + a[e]);
        e = "left:0;position:absolute;top:0;";
        nc && (e = e + "width:" + b + "px;height:" + c + "px;");
        d.push('style="' + e + '"');
        d.push("></iframe>");
        a = a.id;
        b = "border:none;height:" + c + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b + "px;background-color:transparent";
        return ['<ins id="', a + "_expand", '" style="display:inline-table;', b, '"><ins id="', a + "_anchor", '" style="display:block;', b, '">', d.join(" "), "</ins></ins>"].join("")
    };
    var pc = function (a) {
        if (!a)return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var qc = null;
    var rc = {"120x90": !0, "160x90": !0, "180x90": !0, "200x90": !0, "468x15": !0, "728x15": !0};
    var sc = "google_ad_client google_ad_format google_ad_height google_ad_width google_city google_country google_encoding google_language google_page_url".split(" "), tc = function (a) {
        try {
            var b = a.top.google_ads_params_store;
            if (b)return b;
            b = a.top.google_ads_params_store = {};
            if (b === a.top.google_ads_params_store)return b
        } catch (c) {
        }
        return null
    };
    var uc, R = function (a) {
        this.u = [];
        this.m = a || window;
        this.l = 0;
        this.s = null;
        this.R = 0
    }, vc = function (a, b) {
        this.Y = a;
        this.ja = b
    };
    R.prototype.enqueue = function (a, b) {
        0 != this.l || 0 != this.u.length || b && b != window ? this.K(a, b) : (this.l = 2, this.O(new vc(a, window)))
    };
    R.prototype.K = function (a, b) {
        this.u.push(new vc(a, b || this.m));
        wc(this)
    };
    R.prototype.Z = function (a) {
        this.l = 1;
        if (a) {
            var b = p(this.N, this, !0);
            this.s = this.m.setTimeout(B("sjr::timeout", b, void 0), a)
        }
    };
    R.prototype.N = function (a) {
        a && ++this.R;
        1 == this.l && (null != this.s && (this.m.clearTimeout(this.s), this.s = null), this.l = 0);
        wc(this)
    };
    R.prototype.da = function () {
        return !(!window || !Array)
    };
    R.prototype.fa = function () {
        return this.R
    };
    R.prototype.nq = R.prototype.enqueue;
    R.prototype.nqa = R.prototype.K;
    R.prototype.al = R.prototype.Z;
    R.prototype.rl = R.prototype.N;
    R.prototype.sz = R.prototype.da;
    R.prototype.tc = R.prototype.fa;
    var wc = function (a) {
        var b = p(a.ga, a);
        a.m.setTimeout(B("sjr::tryrun", b, void 0), 0)
    };
    R.prototype.ga = function () {
        if (0 == this.l && this.u.length) {
            var a = this.u.shift();
            this.l = 2;
            var b = p(this.O, this, a);
            a.ja.setTimeout(B("sjr::run", b, void 0), 0);
            wc(this)
        }
    };
    R.prototype.O = function (a) {
        this.l = 0;
        a.Y()
    };
    var xc = function (a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }, yc = function (a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && xc(a) && K(a.nq) && K(a.nqa) && K(a.al) && K(a.rl)
    }, zc = function () {
        if (uc && xc(uc))return uc;
        var a = Rb(), b = a.google_jobrunner;
        return yc(b) ? uc = b : a.google_jobrunner = uc = new R(a)
    }, Ac = function (a, b) {
        zc().nq(a, b)
    }, Bc = function (a, b) {
        zc().nqa(a, b)
    };
    var U = function (a) {
        this.name = "TagError";
        this.message = a || "";
        Error.captureStackTrace ? Error.captureStackTrace(this, U) : this.stack = Error().stack || ""
    };
    da(U, Error);
    var Cc = function () {
        var a = ya ? "https" : "http", b = Aa("script");
        return ["<", b, ' src="', cc(Eb(), ["/pagead/js/", ua(), "/r20151006/show_ads_impl.js"].join(""), a), '"></', b, ">"].join("")
    }, Dc = function (a, b, c, d) {
        return function () {
            var e = !1;
            d && zc().al(3E4);
            try {
                var f = a.document.getElementById(b).contentWindow;
                if (Ba(f)) {
                    var g = a.document.getElementById(b).contentWindow, h = g.document;
                    h.body && h.body.firstChild || (h.open(), g.google_async_iframe_close = !0, h.write(c))
                } else {
                    for (var l = a.document.getElementById(b).contentWindow, f = c, f = String(f), g = ['"'], h = 0; h < f.length; h++) {
                        var k = f.charAt(h), m = k.charCodeAt(0), q = h + 1, S;
                        if (!(S = cb[k])) {
                            var G;
                            if (31 < m && 127 > m)G = k; else {
                                var w = k;
                                if (w in db)G = db[w]; else if (w in cb)G = db[w] = cb[w]; else {
                                    var v = w, t = w.charCodeAt(0);
                                    if (31 < t && 127 > t)v = w; else {
                                        if (256 > t) {
                                            if (v = "\\x", 16 > t || 256 < t)v += "0"
                                        } else v = "\\u", 4096 > t && (v += "0");
                                        v += t.toString(16).toUpperCase()
                                    }
                                    G = db[w] = v
                                }
                            }
                            S = G
                        }
                        g[q] =
                            S
                    }
                    g.push('"');
                    l.location.replace("javascript:" + g.join(""))
                }
                e = !0
            } catch (D) {
                l = Rb().google_jobrunner, yc(l) && l.rl()
            }
            e && (e = mc("google_async_rrc", c), (new kc(a)).set(b, Dc(a, b, e, !1)))
        }
    }, Ec = function (a) {
        var b = ["<iframe"];
        yb(a, function (a, d) {
            null != a && b.push(" " + d + '="' + a + '"')
        });
        b.push("></iframe>");
        return b.join("")
    }, Gc = function (a, b, c) {
        Fc(a, b, c, function (a, b, f) {
            for (var g = a.document, h = b.id, l = 0; !h || g.getElementById(h);)h = "aswift_" + l++;
            b.id = h;
            b.name = h;
            var h = Number(f.google_ad_width), l = Number(f.google_ad_height), k =
                N.H;
            ic(f, a, k.j, k.i);
            nc = M(O(a), k.i);
            16 == f.google_reactive_ad_format ? (a = g.createElement("div"), f = oc(b, h, l), a.innerHTML = f, c.appendChild(a.firstChild)) : (a = oc(b, h, l), c.innerHTML = a);
            return b.id
        })
    }, Fc = function (a, b, c, d) {
        var e = Aa("script"), f, g;
        a:{
            try {
                var h = a.top.google_pubvars_reuse_experiment;
                if ("undefined" !== typeof h) {
                    g = h;
                    break a
                }
                h = Fa(["C", "E"], pa) || null;
                a.top.google_pubvars_reuse_experiment = h;
                if (a.top.google_pubvars_reuse_experiment === h) {
                    g = h;
                    break a
                }
            } catch (ha) {
            }
            g = null
        }
        if ("E" === g) {
            f = null != b.google_ad_client;
            g = null != b.google_ad_width;
            var h = null != b.google_ad_height, l = tc(a);
            if (l) {
                for (var k = 0; k < sc.length; k++) {
                    var m = sc[k];
                    null != b[m] && (l[m] = b[m])
                }
                if (l = tc(a)) {
                    var k = l.google_ad_width, m = l.google_ad_height, q = l.google_ad_format;
                    k && m && q && (q = (q = q && q.match(/(\d+)x(\d+)/)) ? {
                        width: q[1],
                        height: q[2]
                    } : null, !q || q.width == k && q.height == m || delete l.google_ad_format)
                }
            }
            if (l = tc(a))for (k = 0; k < sc.length; k++)m = sc[k], null == b[m] && null != l[m] && (b[m] = l[m]);
            l = null != b.google_ad_client;
            k = null != b.google_ad_width;
            m = null != b.google_ad_height;
            f = [f ? "c2" : l ? "c1" : "c0", g ? "w2" : k ? "w1" : "w0", h ? "h2" : m ? "h1" : "h0"].join()
        }
        g = {};
        h = b.google_ad_height;
        g.width = '"' + b.google_ad_width + '"';
        g.height = '"' + h + '"';
        g.frameborder = '"0"';
        g.marginwidth = '"0"';
        g.marginheight = '"0"';
        g.vspace = '"0"';
        g.hspace = '"0"';
        g.allowtransparency = '"true"';
        g.scrolling = '"no"';
        g.allowfullscreen = '"true"';
        g.onload = '"' + lc + '"';
        d = d(a, g, b);
        h = b.google_ad_output;
        g = b.google_ad_format;
        g || "html" != h && null != h || (g = b.google_ad_width + "x" + b.google_ad_height, b.google_ad_format_suffix && (g += b.google_ad_format_suffix));
        h = !b.google_ad_slot || b.google_override_format || !rc[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
        g = g && h ? g.toLowerCase() : "";
        b.google_ad_format = g;
        g = [b.google_ad_slot, b.google_ad_format, b.google_ad_type, b.google_ad_width, b.google_ad_height];
        h = [];
        l = 0;
        for (k = c; k && 25 > l; k = k.parentNode, ++l)h.push(9 !== k.nodeType && k.id || "");
        (h = h.join()) && g.push(h);
        b.google_ad_unit_key = Ha(g.join(":")).toString();
        g = a.google_adk2_experiment = a.google_adk2_experiment || Fa(["C", "E"], na) || "N";
        if ("E" == g) {
            g = [];
            for (h = 0; c && 25 > h; ++h) {
                l = "";
                l = (l = 9 !== c.nodeType && c.id) ? "/" + l : "";
                a:{
                    if (c && c.nodeName && c.parentElement)for (var k = c.nodeName.toString().toLowerCase(), m = c.parentElement.childNodes, S = q = 0; S < m.length; ++S) {
                        var G = m[S];
                        if (G.nodeName && G.nodeName.toString().toLowerCase() === k) {
                            if (c === G) {
                                k = "." + q;
                                break a
                            }
                            ++q
                        }
                    }
                    k = ""
                }
                g.push((c.nodeName && c.nodeName.toString().toLowerCase()) + l + k);
                c = c.parentElement
            }
            c = g.join() + ":";
            g = a;
            h = [];
            if (g)try {
                for (var w = g.parent, l = 0; w && w !== g && 25 > l; ++l) {
                    for (var v = w.frames, k = 0; k < v.length; ++k)if (g === v[k]) {
                        h.push(k);
                        break
                    }
                    g = w;
                    w = g.parent
                }
            } catch (ha) {
            }
            b.google_ad_dom_fingerprint = Ha(c + h.join()).toString()
        } else"C" == g && (b.google_ad_dom_fingerprint = "ctrl");
        w = ac(b);
        v = null;
        c = Fa(["C", "E"], qa);
        if ("E" == c) {
            a:{
                try {
                    if (window.JSON && window.JSON.stringify && window.encodeURIComponent) {
                        var t = encodeURIComponent(window.JSON.stringify(b)), D;
                        if (Zb)D = n.btoa(t); else {
                            g = [];
                            for (l = h = 0; l < t.length; l++) {
                                for (var L = t.charCodeAt(l); 255 < L;)g[h++] = L & 255, L >>= 8;
                                g[h++] = L
                            }
                            if (!Yb)for (Yb = {}, t = 0; 65 > t; t++)Yb[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t);
                            t = Yb;
                            L = [];
                            for (h = 0; h < g.length; h += 3) {
                                var H = g[h], va = h + 1 < g.length, T = va ? g[h + 1] : 0, X = h + 2 < g.length, Mb = X ? g[h + 2] : 0, l = H >> 2, k = (H & 3) << 4 | T >> 4, m = (T & 15) << 2 | Mb >> 6, q = Mb & 63;
                                X || (q = 64, va || (m = 64));
                                L.push(t[l], t[k], t[m], t[q])
                            }
                            D = L.join("")
                        }
                        v = D;
                        break a
                    }
                    Lb("sblob", {json: window.JSON ? 1 : 0, eURI: window.encodeURIComponent ? 1 : 0})
                } catch (ha) {
                    z.o("sblob", ha, void 0, void 0)
                }
                v = ""
            }
            v || (v = "{X}")
        } else"C" == c && (v = "{C}");
        var A;
        b = b.google_ad_client;
        if (!qc)b:{
            H = [n.top];
            D = [];
            for (va = 0; T = H[va++];) {
                D.push(T);
                try {
                    if (T.frames)for (var I = T.frames.length,
                                          X = 0; X < I && 1024 > H.length; ++X)H.push(T.frames[X])
                } catch (ha) {
                }
            }
            for (I = 0; I < D.length; I++)try {
                if (A = D[I].frames.google_esf) {
                    qc = A;
                    break b
                }
            } catch (ha) {
            }
            qc = null
        }
        qc ? A = "" : (A = {style: "display:none"}, A["data-ad-client"] = pc(b), A.id = "google_esf", A.name = "google_esf", A.src = cc(ia("", "googleads.g.doubleclick.net"), ["/pagead/html/", ua(), "/r20151006/zrt_lookup.html"].join("")), A = Ec(A));
        I = ea;
        b = (new Date).getTime();
        if (D = a.google_async_for_oa_experiment)a.google_async_for_oa_experiment = void 0;
        H = a.google_unique_id;
        A = ["<!doctype html><html><body>", A, "<", e, ">", w, "google_show_ads_impl=true;google_unique_id=", "number" === typeof H ? H : 0, ';google_async_iframe_id="', d, '";google_start_time=', I, ";", c ? 'google_pub_vars = "' + v + '";' : "", f ? 'google_pubvars_reuse_experiment_result = "' + f + '";' : "", D ? 'google_async_for_oa_experiment="' + D + '";' : "", "google_bpp=", b > I ? b - I : 1, ";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</", e, ">", Cc(), "</body></html>"].join("");
        (a.document.getElementById(d) ?
            Ac : Bc)(Dc(a, d, A, !0))
    }, Hc = function (a, b) {
        var c = navigator;
        if (oa && a && b && c) {
            var c = a.document, d = cc("pagead2.googlesyndication.com", "/pub-config/" + pc(b) + ".js");
            Ca(c, d)
        }
    };
    var V = function (a, b) {
        this.M = a;
        this.L = b
    };
    V.prototype.minWidth = function () {
        return this.M
    };
    V.prototype.height = function () {
        return this.L
    };
    V.prototype.F = function (a) {
        return 300 < a && 300 < this.L ? this.M : 1200 < a ? 1200 : Math.round(a)
    };
    var Ic = {rectangle: 1, horizontal: 2, vertical: 4, autorelaxed: 1}, W = function (a, b, c) {
        V.call(this, a, b);
        this.ba = c
    };
    da(W, V);
    var Jc = function (a) {
        return function (b) {
            return !!(b.ba & a)
        }
    }, Kc = [new W(970, 90, 2), new W(728, 90, 2), new W(468, 60, 2), new W(336, 280, 1), new W(320, 100, 2), new W(320, 50, 2), new W(300, 600, 4), new W(300, 250, 1), new W(250, 250, 1), new W(234, 60, 2), new W(200, 200, 1), new W(180, 150, 1), new W(160, 600, 4), new W(125, 125, 1), new W(120, 600, 4), new W(120, 240, 4)];
    var Lc = function (a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f;
                f = La(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }, Mc = function (a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(), d = a.getBoundingClientRect();
            return {x: d.left - c.left, y: d.top - c.top}
        } catch (e) {
            return null
        }
    }, Nc = function (a) {
        var b = 0, c;
        for (c in Ic)-1 != a.indexOf(c) && (b |= Ic[c]);
        return b
    };
    var Oc = function (a) {
        return function (b) {
            return b.minWidth() <= a
        }
    }, Qc = function (a, b, c) {
        var d = a && Pc(c, b);
        return function (a) {
            return !(d && 250 <= a.height())
        }
    }, Pc = function (a, b) {
        var c = Math.min(P(b).clientHeight, 16 * P(b).clientWidth / 9), d = Mc(a, b);
        return (d ? d.y : 0) < c - 100
    }, Sc = function (a, b) {
        var c = b, d = Infinity;
        do {
            var e = Rc(c, a, "height");
            e && (d = Math.min(d, e));
            (e = Rc(c, a, "maxHeight")) && (d = Math.min(d, e))
        } while ((c = c.parentElement) && "HTML" != c.tagName);
        return d
    }, Rc = function (a, b, c) {
        if (a.style) {
            var d = La(a.style[c]);
            if (d)return d
        }
        if (a =
                Da(a, b))if (d = La(a[c]))return d;
        return null
    };
    var Tc = function (a) {
        return function (b) {
            for (var c = a.length - 1; 0 <= c; --c)if (!a[c](b))return !1;
            return !0
        }
    }, Uc = function (a, b) {
        for (var c = a.length, d = 0; d < c; ++d) {
            var e = a[d];
            if (b(e))return e
        }
        return null
    };
    var Wc = function (a, b, c, d) {
        var e = Kc.slice(0);
        if (M(O(c), N.A.i))for (var f = Math.random, g = e.length - 1; 0 < g; g--) {
            var h = Math.floor(f() * (g + 1)), l = e[g];
            e[g] = e[h];
            e[h] = l
        }
        f = 488 > P(c).clientWidth;
        b = [Oc(a), Vc(f), Qc(f, c, d), Jc(b)];
        e = Uc(e, Tc(b));
        if (!e)throw new U("adsbygoogle.push() error: No slot size for availableWidth=" + a);
        return e
    }, Vc = function (a) {
        return function (b) {
            return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
        }
    };
    var Y = function (a, b) {
        V.call(this, a, b)
    };
    da(Y, V);
    Y.prototype.F = function (a) {
        return Math.min(1200, Math.round(a))
    };
    var Xc = [new Y(468, 350), new Y(414, 828), new Y(384, 768), new Y(375, 750), new Y(360, 720), new Y(320, 640), new Y(120, 600)], Yc = [new Y(468, 300), new Y(414, 828), new Y(384, 768), new Y(375, 750), new Y(360, 720), new Y(320, 640), new Y(120, 600)], Zc = function (a, b) {
        var c = Uc(a, Oc(b));
        if (!c)throw new U("adsbygoogle.push() error: No autorelaxed size for width=" + b + "px");
        return c
    };
    var $c = [{C: [0], D: [6, 15, 0, 1, 3, 2, 7, 8, 10, 13, 9, 4, 5, 11, 12, 14]}, {
        C: [1],
        D: [6, 15, 0, 1, 2, 3, 7, 8, 4, 10, 9, 13, 5, 11, 12, 14]
    }, {C: [2], D: [0, 15, 1, 2, 3, 4, 7, 8, 13, 5, 6, 9, 10, 11, 12, 14]}], ad = function (a, b) {
        var c = Sc(a, b);
        return function (a) {
            return a.height() <= c
        }
    };
    var Z = function (a, b) {
        V.call(this, a, b)
    };
    da(Z, V);
    Z.prototype.F = function () {
        return this.minWidth()
    };
    var bd = [new Z(728, 15), new Z(468, 15), new Z(200, 90), new Z(180, 90), new Z(160, 90), new Z(120, 90)];
    var fd = function () {
        var a = window;
        if (void 0 === a.google_dre) {
            var b = "";
            a.postMessage && Fb(a) && jc() && (b = Fa(["20050000", "20050001"], ra)) && (a.google_ad_modifications = a.google_ad_modifications || {}, a.google_ad_modifications.eids = a.google_ad_modifications.eids || [], a.google_ad_modifications.eids.push(b));
            a.google_dre = b;
            "20050001" == a.google_dre && (Ma(a.top, "message", B("dr::mh", r(cd, a), r(dd, a))), a.setTimeout(B("dr::to", r(ed, a, !0), r(dd, a)), 2E3), a.google_drc = 0, a.google_q = a.google_q || {}, a.google_q.tags = a.google_q.tags ||
                [])
        }
    }, gd = function (a) {
        "20050001" == n.google_dre && (a.params = a.params || {}, a.params.google_delay_requests_delay = 0, a.params.google_delay_requests_count = n.google_drc++, a.T = u())
    }, hd = function (a) {
        if ("20050001" == n.google_dre) {
            var b = u() - a.T;
            a.params.google_delay_requests_delay = b
        }
    }, cd = function (a, b) {
        var c;
        if (c = b && "afb" == b.data)c = b.origin, c = !!Cb[c] || wa && Db.test(c);
        c && ed(a, !1)
    }, ed = function (a, b) {
        if (a.google_q && a.google_q.tags) {
            var c = a.google_q.tags;
            dd(a);
            c.length && (b && Lb("drt", {Wa: c.length, duration: 2E3}, 1), id(c))
        }
    };
    var Hb = function (a) {
        a.shv = ua()
    };
    z.G = !wa;
    var jd = function (a) {
            return Bb.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
        }, ld = function (a, b) {
            var c = window;
            a.setAttribute("data-adsbygoogle-status", "done");
            kd(a, b, c)
        }, kd = function (a, b, c) {
            md(a, b, c);
            if (!nd(a, b, c)) {
                if (b.google_reactive_ads_config) {
                    if (od)throw new U("adsbygoogle.push() error: Only one 'enable_page_level_ads' allowed per page.");
                    od = !0
                } else Ab(c);
                pd || (pd = !0, Hc(c, b.google_ad_client));
                yb($b, function (a, d) {
                    b[d] = b[d] || c[d]
                });
                b.google_loader_used = "aa";
                var d = b.google_ad_output;
                if (d && "html" != d)throw new U("adsbygoogle.push() error: No support for google_ad_output=" + d);
                Jb("aa::load", Kb, function () {
                    Gc(c, b, a)
                })
            }
        }, nd = function (a, b, c) {
            var d = b.google_reactive_ads_config;
            if (d)var e = d.page_level_pubvars, f = (aa(e) ? e : {}).google_tag_origin;
            var g = b.google_ad_slot, e = c.google_ad_modifications;
            !e || dc(e.ad_whitelist, g, f || b.google_tag_origin) ? e = null : (f = e.space_collapsing || "none", e = (g = dc(e.ad_blacklist, g)) ? {
                J: !0,
                P: g.space_collapsing || f
            } : e.remove_ads_by_default ? {J: !0, P: f} : null);
            return e && e.J &&
            "on" != b.google_adtest ? ("slot" == e.P && (null !== Ka(a.getAttribute("width")) && a.setAttribute("width", 0), null !== Ka(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0) : !(e = Da(a, c)) || "none" != e.display || "on" == b.google_adtest || 0 < b.google_reactive_ad_format || d ? !1 : (c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0)
        }, md = function (a, b, c) {
            for (var d = a.attributes, e = d.length, f = 0; f < e; f++) {
                var g =
                    d[f];
                if (/data-/.test(g.name)) {
                    var h = g.name.replace("data", "google").replace(/-/g, "_");
                    if (!b.hasOwnProperty(h)) {
                        var g = g.value, l = {
                            google_reactive_ad_format: fa,
                            google_allow_expandable_ads: y
                        }, g = l.hasOwnProperty(h) ? l[h](g, null) : g;
                        null === g || (b[h] = g)
                    }
                }
            }
            if (b.google_enable_content_recommendations && 1 == b.google_reactive_ad_format)b.google_ad_width = P(c).clientWidth, b.google_ad_height = 50, a.style.display = "none"; else if (1 == b.google_reactive_ad_format)b.google_ad_width = 320, b.google_ad_height = 50, a.style.display = "none";
            else if (8 == b.google_reactive_ad_format)b.google_ad_width = P(c).clientWidth || 0, b.google_ad_height = P(c).clientHeight || 0, a.style.display = "none"; else if (9 == b.google_reactive_ad_format)b.google_ad_width = P(c).clientWidth || 0, b.google_ad_height = P(c).clientHeight || 0, a.style.display = "none"; else {
                a:if (d = b.google_ad_format, "autorelaxed" == d)d = N.v, ic(b, c, d.j, d.i), e = M(O(c), N.v.i) ? 3 : 2; else if ("auto" == d || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d)) {
                    if (jc() && (d = N.w, ic(b, c, d.j, d.i), M(O(c), N.w.i))) {
                        e = 5;
                        break a
                    }
                    e =
                        1
                } else e = "link" == d ? 4 : void 0;
                if (e) {
                    d = a.offsetWidth;
                    a:switch (f = b.google_ad_format, e) {
                        default:
                        case 1:
                            e = "auto" == f ? .25 >= d / Math.min(1200, P(c).clientWidth) ? 4 : 3 : Nc(f);
                            if (b) {
                                b.google_responsive_formats = e;
                                var k = N.A;
                                ic(b, c, k.j, k.i)
                            }
                            c = Wc(d, e, c, a);
                            break a;
                        case 2:
                            c = Zc(Xc, d);
                            break a;
                        case 3:
                            c = Zc(Yc, d);
                            break a;
                        case 5:
                            "auto" == f ? (e = d / Math.min(1200, P(c).clientWidth), e = .6 < e && !(488 > P(c).clientWidth) ? 2 : .25 >= e ? 4 : 3) : e = Nc(f);
                            b.google_responsive_formats = e;
                            b:{
                                f = a;
                                do if ((h = Da(f, c)) && "fixed" == h.position) {
                                    f = !1;
                                    break b
                                } while (f =
                                    f.parentElement);
                                f = !0
                            }
                            if (f) {
                                b:{
                                    k = Mc(a, c);
                                    k ? (k = k.y, k = 285 > k ? 0 : 1396 > k ? 1 : 2) : k = 0;
                                    k = [k];
                                    for (f = 0; f < $c.length; ++f) {
                                        h = $c[f];
                                        c:if (g = h.C, k && "number" === typeof k.length && g && "number" === typeof g.length && k.length === g.length) {
                                            for (var l = k.length, m = 0; m < l; m++)if (k[m] !== g[m]) {
                                                g = !1;
                                                break c
                                            }
                                            g = !0
                                        } else g = !1;
                                        if (g) {
                                            f = h.D;
                                            break b
                                        }
                                    }
                                    throw Error("No format for " + k);
                                }
                                k = [];
                                for (h = 0; h < f.length; ++h)k.push(Kc[f[h]]);
                                f = 488 > P(c).clientWidth;
                                f = [ad(c, a), Oc(d), Qc(f, c, a), Jc(e)];
                                k = Uc(k, Tc(f))
                            }
                            c = k || Wc(d, e, c, a);
                            break a;
                        case 4:
                            c = Uc(bd, Oc(d));
                            if (!c)throw new U("adsbygoogle.push() error: No link unit size for width=" + d + "px");
                            b.google_ad_format_suffix = "_0ads_al";
                            b.google_override_format = 1
                    }
                    b.google_ad_width = c.F(d);
                    b.google_ad_height = c.height();
                    a.style.height = c.height() + "px";
                    b.google_ad_resizable = !0;
                    delete b.google_ad_format;
                    b.google_loader_features_used = 128
                } else!Ja.test(b.google_ad_width) && !Ia.test(a.style.width) || !Ja.test(b.google_ad_height) && !Ia.test(a.style.height) ? (c = Da(a, c), a.style.width = c.width, a.style.height = c.height, Lc(c, b), b.google_ad_width ||
                (b.google_ad_width = a.offsetWidth), b.google_ad_height || (b.google_ad_height = a.offsetHeight), b.google_loader_features_used = 256) : (Lc(a.style, b), b.google_ad_output && "html" != b.google_ad_output || 300 != b.google_ad_width || 250 != b.google_ad_height || (c = a.style.width, a.style.width = "100%", d = a.offsetWidth, a.style.width = c, b.google_available_width = d))
            }
        }, qd = function (a) {
            for (var b = document.getElementsByTagName("ins"), c = 0, d = b[c]; c < b.length; d = b[++c]) {
                var e = d;
                if (jd(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") &&
                    (!a || d.id == a))return d
            }
            return null
        }, od = !1, pd = !1, sd = function (a) {
            if (jc()) {
                var b;
                a:{
                    try {
                        b = n.JSON.parse(n.localStorage.getItem("google_ama_config") || "");
                        break a
                    } catch (l) {
                    }
                    b = null
                }
                if (b) {
                    var c;
                    if (c = b.exp > u())a:{
                        var d = b;
                        c = Pb(n);
                        d = d.mods;
                        if (!isNaN(c) && d)for (var e = 0; e < d.length; e++) {
                            var f = d[e], g = f.max, h = f.eids;
                            if (c >= f.min && c <= g) {
                                if (h)for (c = h, d = n.google_ad_modifications = n.google_ad_modifications || {}, d = d.loeids = d.loeids || [], e = 0; e < c.length; e++)d.push(c[e]);
                                c = !0;
                                break a
                            }
                        }
                        c = !1
                    }
                    if (c)b = cc(Eb(), b.lib), b = Ca(n.document,
                        b), c = u(), b.onload = B("aa::amarn", r(rd, n, c, a), void 0); else try {
                        n.localStorage.removeItem("google_ama_config")
                    } catch (l) {
                        ec(n, {lserr: 1})
                    }
                }
            }
        }, rd = function (a, b, c) {
            ec(a, {t: u() - b});
            (b = a.google_amar) && K(b) && Jb("aa::amar", Kb, r(b, a, c))
        }, dd = function (a) {
            a.google_q.tags = void 0
        }, id = function (a) {
            if (a && a.shift)try {
                for (var b, c = 20; 0 < a.length && (b = a.shift()) && 0 < c;)td(b), --c
            } catch (d) {
                throw window.setTimeout(ud, 0), d;
            }
        }, vd = function (a, b) {
            var c = {};
            yb(fc, function (b, d) {
                a.hasOwnProperty(d) && (c[d] = a[d])
            });
            aa(a.enable_page_level_ads) &&
            (c.page_level_pubvars = a.enable_page_level_ads);
            var d = document.createElement("ins");
            d.className = "adsbygoogle";
            d.style.display = "none";
            b ? wb.body.appendChild(d) : wb.documentElement.appendChild(d);
            ld(d, {google_reactive_ads_config: c, google_ad_client: a.google_ad_client})
        }, wd = function (a) {
            if (!Fb(window))throw new U("adsbygoogle.push() error: Page-level tag does not work inside iframes.");
            var b = M(O(J), N.I.i), c = !b;
            wb.body || b ? vd(a, c) : Ma(wb, "DOMContentLoaded", Nb(function () {
                vd(a, c)
            }))
        }, xd = function (a, b, c, d) {
            if (0 ==
                b.message.indexOf("TagError")) {
                var e = {};
                Va(z, e, d);
                e.context = a;
                e.msg = b.message.substring(0, 512);
                a = n.document;
                e.url = a.URL.substring(0, 512);
                e.ref = a.referrer.substring(0, 512);
                Pa(Gb, "puberror", e, !0, c || .01);
                return !1
            }
            return z.o(a, b, c, d)
        }, yd = function (a, b, c, d) {
            return 0 == b.message.indexOf("TagError") ? !1 : z.o(a, b, c, d)
        }, td = function (a) {
            var b = {};
            Jb("aa::hqe", xd, function () {
                zd(a, b)
            }, function (c) {
                c.client = c.client || b.google_ad_client || a.google_ad_client;
                c.slotname = c.slotname || b.google_ad_slot;
                c.tag_origin = c.tag_origin ||
                    b.google_tag_origin
            })
        }, zd = function (a, b) {
            ea = (new Date).getTime();
            if (n.google_q && n.google_q.tags)gd(a), n.google_q.tags.push(a); else {
                var c;
                a:{
                    if (a.enable_page_level_ads) {
                        if ("string" == typeof a.google_ad_client) {
                            c = !0;
                            break a
                        }
                        throw new U("adsbygoogle.push() error: 'google_ad_client' is missing from the tag config.");
                    }
                    c = !1
                }
                if (c)sd(a.google_ad_client), wd(a); else {
                    n.google_q ? hd(a) : (fd(), gd(a));
                    c = a.element;
                    var d = a.params;
                    d && yb(d, function (a, c) {
                        b[c] = a
                    });
                    if (c) {
                        if (!jd(c) && (c = c.id ? qd(c.id) : null, !c))throw new U("adsbygoogle.push() error: 'element' has already been filled.");
                        if (!("innerHTML" in c))throw new U("adsbygoogle.push() error: 'element' is not a good DOM element.");
                    } else if (c = qd(), !c)throw new U("adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.");
                    ld(c, b)
                }
            }
        }, ud = function () {
            Ib();
            Jb("aa::main", yd, Ad)
        }, Ad = function () {
            var a = J.google_ad_modifications = J.google_ad_modifications || {};
            if (!a.plle) {
                a.plle = !0;
                var a = a.loeids = a.loeids || [], b = N.w, c = b.i;
                if (J.location && J.location.hash == "#google_plle_" + c)b = c; else {
                    var b = [b.j, c], c =
                        new Ob(ja, ja + ka - 1), d;
                    (d = 0 >= ka || ka % b.length) || (d = gc.aa, d = !(d.start <= c.start && d.end >= c.end));
                    d ? b = null : (d = Pb(J), b = null !== d && c.start <= d && c.end >= d ? b[(d - ja) % b.length] : null)
                }
                b && a.push(b);
                b = N.v;
                (b = hc(la, b.j, b.i)) && a.push(b);
                b = N.A;
                (b = hc(ma, b.j, b.i)) && a.push(b);
                b = N.H;
                (b = hc(sa, b.j, b.i)) && a.push(b);
                wb.body || (b = N.I, (b = hc(ta, b.j, b.i)) && a.push(b))
            }
            a = window.adsbygoogle;
            id(a);
            if (!a || !a.loaded) {
                window.adsbygoogle = {push: td, loaded: !0};
                a && Bd(a.onload);
                try {
                    Object.defineProperty(window.adsbygoogle, "onload", {set: Bd})
                } catch (e) {
                }
            }
        },
        Bd = function (a) {
            K(a) && window.setTimeout(a, 0)
        };
    ud();
}).call(this)
