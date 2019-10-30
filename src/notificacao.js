var __LomadeeNotificacaoJS = (function() {

    /*!
    * Morpheus - A Brilliant Animator
    * https://github.com/ded/morpheus - (c) Dustin Diaz 2011
    * License MIT
    */
    !function(e, t) { typeof define == "function" ? define(t) : typeof module != "undefined" ? module.exports = t() : this[e] = t() }("morpheus", function() { function E(e, t, n) { if (Array.prototype.indexOf) return e.indexOf(t); for (n = 0; n < e.length; ++n)if (e[n] === t) return n } function S(e) { var t, n = w.length; s && (e = i()); for (t = n; t--;)w[t](e); w.length && b(S) } function x(e) { w.push(e) === 1 && b(S) } function T(e) { var t, n = E(w, e); n >= 0 && (t = w.slice(n + 1), w.length = n, w = w.concat(t)) } function N(e, t) { var n = {}, r; if (r = e.match(c)) n.rotate = B(r[1], t ? t.rotate : null); if (r = e.match(h)) n.scale = B(r[1], t ? t.scale : null); if (r = e.match(p)) n.skewx = B(r[1], t ? t.skewx : null), n.skewy = B(r[3], t ? t.skewy : null); if (r = e.match(d)) n.translatex = B(r[1], t ? t.translatex : null), n.translatey = B(r[3], t ? t.translatey : null); return n } function C(e) { var t = ""; return "rotate" in e && (t += "rotate(" + e.rotate + "deg) "), "scale" in e && (t += "scale(" + e.scale + ") "), "translatex" in e && (t += "translate(" + e.translatex + "px," + e.translatey + "px) "), "skewx" in e && (t += "skew(" + e.skewx + "deg," + e.skewy + "deg)"), t } function k(e, t, n) { return "#" + (1 << 24 | e << 16 | t << 8 | n).toString(16).slice(1) } function L(e) { var t = e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/); return (t ? k(t[1], t[2], t[3]) : e).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3") } function A(e) { return e.replace(/-(.)/g, function(e, t) { return t.toUpperCase() }) } function O(e) { return typeof e == "function" } function M(e) { return Math.sin(e * Math.PI / 2) } function _(e, t, n, r, s, o) { function d(e) { var i = e - c; if (i > a || h) return o = isFinite(o) ? o : 1, h ? p && t(o) : t(o), T(d), n && n.apply(f); isFinite(o) ? t(l * r(i / a) + s) : t(r(i / a)) } r = O(r) ? r : j.easings[r] || M; var a = e || u, f = this, l = o - s, c = i(), h = 0, p = 0; return x(d), { stop: function(e) { h = 1, p = e, e || (n = null) } } } function D(e, t) { var n = e.length, r = [], i, s; for (i = 0; i < n; ++i)r[i] = [e[i][0], e[i][1]]; for (s = 1; s < n; ++s)for (i = 0; i < n - s; ++i)r[i][0] = (1 - t) * r[i][0] + t * r[parseInt(i + 1, 10)][0], r[i][1] = (1 - t) * r[i][1] + t * r[parseInt(i + 1, 10)][1]; return [r[0][0], r[0][1]] } function P(e, t, n) { var r = [], i, s, o, u; for (i = 0; i < 6; i++)o = Math.min(15, parseInt(t.charAt(i), 16)), u = Math.min(15, parseInt(n.charAt(i), 16)), s = Math.floor((u - o) * e + o), s = s > 15 ? 15 : s < 0 ? 0 : s, r[i] = s.toString(16); return "#" + r.join("") } function H(e, t, n, r, i, s, o) { if (i == "transform") { o = {}; for (var a in n[s][i]) o[a] = a in r[s][i] ? Math.round(((r[s][i][a] - n[s][i][a]) * e + n[s][i][a]) * u) / u : n[s][i][a]; return o } return typeof n[s][i] == "string" ? P(e, n[s][i], r[s][i]) : (o = Math.round(((r[s][i] - n[s][i]) * e + n[s][i]) * u) / u, i in v || (o += t[s][i] || "px"), o) } function B(e, t, n, r, i) { return (n = f.exec(e)) ? (i = parseFloat(n[2])) && t + (n[1] == "+" ? 1 : -1) * i : parseFloat(e) } function j(e, t) { var n = e ? n = isFinite(e.length) ? e : [e] : [], r, i = t.complete, s = t.duration, o = t.easing, u = t.bezier, f = [], c = [], h = [], p = [], d, v; u && (d = t.left, v = t.top, delete t.right, delete t.bottom, delete t.left, delete t.top); for (r = n.length; r--;) { f[r] = {}, c[r] = {}, h[r] = {}; if (u) { var b = y(n[r], "left"), w = y(n[r], "top"), E = [B(O(d) ? d(n[r]) : d || 0, parseFloat(b)), B(O(v) ? v(n[r]) : v || 0, parseFloat(w))]; p[r] = O(u) ? u(n[r], E) : u, p[r].push(E), p[r].unshift([parseInt(b, 10), parseInt(w, 10)]) } for (var S in t) { switch (S) { case "complete": case "duration": case "easing": case "bezier": continue }var x = y(n[r], S), T, k = O(t[S]) ? t[S](n[r]) : t[S]; if (typeof k == "string" && a.test(k) && !a.test(x)) { delete t[S]; continue } f[r][S] = S == "transform" ? N(x) : typeof k == "string" && a.test(k) ? L(x).slice(1) : parseFloat(x), c[r][S] = S == "transform" ? N(k, f[r][S]) : typeof k == "string" && k.charAt(0) == "#" ? L(k).slice(1) : B(k, parseFloat(x)), typeof k == "string" && (T = k.match(l)) && (h[r][S] = T[1]) } } return _.apply(n, [s, function(e, i, s) { for (r = n.length; r--;) { u && (s = D(p[r], e), n[r].style.left = s[0] + "px", n[r].style.top = s[1] + "px"); for (var o in t) i = H(e, h, f, c, o, r), o == "transform" ? n[r].style[m] = C(i) : o == "opacity" && !g ? n[r].style.filter = "alpha(opacity=" + i * 100 + ")" : n[r].style[A(o)] = i } }, i, o]) } var e = document, t = window, n = t.performance, r = n && (n.now || n.webkitNow || n.msNow || n.mozNow), i = r ? function() { return r.call(n) } : function() { return +(new Date) }, s = !1, o = e.documentElement, u = 1e3, a = /^rgb\(|#/, f = /^([+\-])=([\d\.]+)/, l = /^(?:[\+\-]=?)?\d+(?:\.\d+)?(%|in|cm|mm|em|ex|pt|pc|px)$/, c = /rotate\(((?:[+\-]=)?([\-\d\.]+))deg\)/, h = /scale\(((?:[+\-]=)?([\d\.]+))\)/, p = /skew\(((?:[+\-]=)?([\-\d\.]+))deg, ?((?:[+\-]=)?([\-\d\.]+))deg\)/, d = /translate\(((?:[+\-]=)?([\-\d\.]+))px, ?((?:[+\-]=)?([\-\d\.]+))px\)/, v = { lineHeight: 1, zoom: 1, zIndex: 1, opacity: 1, transform: 1 }, m = function() { var t = e.createElement("a").style, n = ["webkitTransform", "MozTransform", "OTransform", "msTransform", "Transform"], r; for (r = 0; r < n.length; r++)if (n[r] in t) return n[r] }(), g = function() { return typeof e.createElement("a").style.opacity != "undefined" }(), y = e.defaultView && e.defaultView.getComputedStyle ? function(t, n) { n = n == "transform" ? m : n, n = A(n); var r = null, i = e.defaultView.getComputedStyle(t, ""); return i && (r = i[n]), t.style[n] || r } : o.currentStyle ? function(e, t) { t = A(t); if (t == "opacity") { var n = 100; try { n = e.filters["DXImageTransform.Microsoft.Alpha"].opacity } catch (r) { try { n = e.filters("alpha").opacity } catch (i) { } } return n / 100 } var s = e.currentStyle ? e.currentStyle[t] : null; return e.style[t] || s } : function(e, t) { return e.style[A(t)] }, b = function() { return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || t.oRequestAnimationFrame || function(e) { t.setTimeout(function() { e(+(new Date)) }, 17) } }(); b(function(e) { s = e > 1e12 != i() > 1e12 }); var w = []; return j.tween = _, j.getStyle = y, j.bezier = D, j.transform = m, j.parseTransform = N, j.formatTransform = C, j.animationFrame = b, j.easings = {}, j });

    var
        app_id = '156799722382710615dc0',
        default_source_id = '36133587',
        currency_map = {
            'BRL': {
                abrv: 'R$ ',
                cents: 2,
                mi: '.',
                cent: ','
            }
        },
        document_body = document.body,
        document_element = document.documentElement,
        iframe = undefined,
        div = undefined,
        path = (document.location.href.match(/file:\//) ? './frameads.html' : 'http://localhost:5000/frameads.html'),
        options = {},
        categories_order = ['bestsellers', 77, 2852, 3673, 3671, 6424, 138, 6058, 126, 3606, 10232, 3661]
    ;


    function $(e) {
        return document.getElementById(e);
    }


    function shuffle(o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) { };
        return o;
    }


    function paramsTo(params, prefix, and) {
        var query = [];
        params = params || {};
        for (key in params) {
            if (params.hasOwnProperty(key) && typeof params[key] !== "undefined") {
                query.push(key + "=" + prefix + encodeURIComponent(params[key]) + prefix);
            }
        }
        return query.join(and);
    }


    function paramsToQuery(params) {
        return paramsTo(params, '', '&');
    }


    function xhr(url, successHandler, errorHandler, timeoutHandler) {
        var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', url, true);
        xhr.onreadystatechange = function() {
            var
                status,
                data
            ;
            // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
            if (xhr.readyState == 4) { // `DONE`
                status = xhr.status;
                if (status == 200) {
                    data = JSON.parse(xhr.responseText);
                    successHandler && successHandler(data);
                } else {
                    errorHandler && errorHandler(status);
                }
            }
        }
        xhr.ontimeout = function() {
            timeoutHandler && timeoutHandler();
        }
        xhr.timeout = 10000;
        xhr.send();
    }


    function formatMoney(number, currency) {
        if (number > 0) {
            var
                currency = currency_map[currency],
                n = currency.cents,
                x = 3,
                s = currency.mi,
                c = currency.cent,
                re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
                num = parseInt(number).toFixed(Math.max(0, ~~n))
            ;

            return currency.abrv + (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
        } else {
            return "Consulte";
        }
    }


    function getCookie(cname) {
        var
            name = cname + "=",
            decodedCookie = decodeURIComponent(document.cookie),
            ca = decodedCookie.split(';')
        ;
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    function processCookies() {

        var
            lomadee_cookie = getCookie("loc"),
            result = {
                categories: [],
                products: []
            }
        ;

        // for tests
        // var lomadee_cookie = "\"cx=77|77&px=661034|637440&us=177132148620180607204233&si=9402546\"";
        // var lomadee_cookie = "\"cx=77|77&px=661034|637440&us=177132148620180607204233&si=9402546\"";

        // if has lomadee cookies
        if (lomadee_cookie !== "") {
            var cookie_array = lomadee_cookie.split("&");
            // cx (categories ids)
            if (cookie_array[0]) {
                var cxs = cookie_array[0].split("=");
                if (cxs[1]) {
                    var cxs_array = shuffle(cxs[1].split("|"));
                    if (cxs_array[0]) {
                        for (var i = 0; i < cxs_array.length; i++) {
                            result.categories.push(cxs_array[i]);
                        }
                    }
                }
            }
            // px (products ids)
            if (cookie_array[1]) {
                var pxs = cookie_array[1].split("=");
                if (pxs[1]) {
                    var pxs_array = shuffle(pxs[1].split("|"));
                    if (pxs_array[0]) {
                        for (var i = 0; i < pxs_array.length; i++) {
                            result.products.push(pxs_array[i]);
                        }
                    }
                }
            }
        }

        return result;
    }


    function renderOffers(o) {

        var offers_holder = $("offers-0");

        if (o && o[0]) {

            var
                render = [],
                len = o.length
            ;

            // randomize
            o = shuffle(o);
            len = 1;

            for (var i = 0; i < len; i++) {
                var
                    abrv = "BRL",
                    installment = (o[i].installment && o[i].installment.quantity) ?
                        ("ou " + o[i].installment.quantity + " x " + formatMoney(o[i].installment.value, abrv)) : "&nbsp;",
                    price = formatMoney(o[i].price, abrv),
                    name = o[i].name
                ;

                if (o[i].product.thumbnail && o[i].product.thumbnail.otherFormats[0]) {
                    var thumbnail = o[i].product.thumbnail.otherFormats[0].url;
                } else {
                    var thumbnail = o[i].thumbnail;
                }

                render.push(
                    "<li>",
                        "<a href='", o[i].link, "' target='_blank'>",
                            "<div class='thumb'><img src='", thumbnail, "' /></div>",
                            "<h2>", name.slice(0, 40), "...</h2>",
                            "<div class='price'>", price, "</div>",
                            "<div class='parcelas'>", installment, "</div>",
                        "</a>",
                    "</li>"
                );
            }

            offers_holder.innerHTML = render.join("");

        } else {

            // não encontrou oferta
            offers_holder.innerHTML = "<div style='margin: 20px'>Nenhum produto encontrado para essa pesquisa.</div>";

        }

    }


    function openAd() {
        div.setAttribute('data-opened', 1);

        iframe = document.createElement('iframe');
        // iframe.allowTransparency = "true";
        iframe.scrolling = 'no';
        iframe.frameBorder = '0';
        iframe.frameborder = '0';
        iframe.marginwidth = '0';
        iframe.marginheight = '0';

        iframe.src = path + '?' + paramsToQuery({
            sourceId: options['sourceId'] || default_source_id
        });

        div.appendChild(iframe);

        // open animation
        morpheus(div, {
            bottom: 0,
            duration: 200
        });
    }


    function getScrollPercent() {
        var
            h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight'
        ;
        return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    }


    function onScroll() {
        var
            scroll_percent = getScrollPercent(),
            opened = parseInt(div.getAttribute('data-opened'))
        ;

        // console.log(scroll_percent);

        if (scroll_percent > 40 && opened !== 1) {
            openAd();
        }
    }


    function renderNotificacao(input_options) {
        options = input_options;

        div = document.createElement('div');

        var close_style = [
            "display: inline;",
            "float: right;",
            "font-size: 12px;",
            "color: #0078a4;",
            "padding: 4px;",
            "cursor: pointer;"
        ].join('');

        div.innerHTML = [
            "<div id='__close_notificacao_lomadee' style='", close_style, "'>",
            "Anúncio ⓧ",
            "</div>"].join('')
            ;

        div.style = [
            "width: 300px;",
            "height: 130px;",
            "position: fixed;",
            "right: 32px;",
            "bottom: -105px;",
            "z-index: 9000;",
            "border-radius: 8px 8px 0 0;",
            "box-shadow: 0 1px 4px rgba(0, 0, 0, .3);",
            "border-top: 3px solid #FC3;",
            "background: #fff;"
        ].join('');

        document_body.appendChild(div);

        var close_dom = document.getElementById('__close_notificacao_lomadee');

        // close button event handler
        close_dom.addEventListener('click', function() {
            if (iframe) {
                iframe.parentNode.removeChild(iframe);
            }
            morpheus(div, {
                bottom: -105,
                duration: 200,
                complete: function() {
                    div.style.display = 'none';
                }
            });
        });

        window.addEventListener('scroll', function() {
            onScroll();
        });

        onScroll();
    }


    function renderInside(input_options) {
        options = input_options;

        var cookies = processCookies();

        if (cookies.products.length > 0) {
            var
                product = shuffle(cookies.products)[0],
                endpoint = "offer/_product/" + product
            ;
        } else if (cookies.categories.length > 0) {
            var
                category = shuffle(cookies.categories)[0],
                endpoint = "offer/_category/" + category
            ;
        } else {
            var
                category = shuffle(categories_order)[0],
                endpoint = "offer/_category/" + category
            ;

            if (category == "bestsellers") {
                endpoint = "offer/_bestsellers";
            }
        }

        var
            options = {
                page: 1,
                size: 6,
                sourceId: options['sourceId'] || default_source_id,
                sort: 'bestsellers'
            },
            url = "https://api.lomadee.com/v2/" + app_id + "/" + endpoint + "?" + paramsToQuery(options)
        ;

        xhr(url, function(o) {
            renderOffers(o.offers);
        });
    }


    return {
        renderNotificacao: renderNotificacao,
        renderInside: renderInside
    }

})();

if (typeof _LomadeeNotificacaoJS == 'object') {
    __LomadeeNotificacaoJS.renderNotificacao(_LomadeeNotificacaoJS);
}
