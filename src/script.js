var LomadeeBalaoJS = (function () {

    var
        app_id = "155001196902309c5f761",
        currency_map = {
            "BRL": {
                abrv: "R$ ",
                cents: 2,
                mi: ".",
                cent: ","
            }
        }
    ;


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
        xhr.onreadystatechange = function () {
            var status;
            var data;
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
        };
        xhr.ontimeout = function () {
            timeoutHandler && timeoutHandler();
        };
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
                num = parseInt(number).toFixed(Math.max(0, ~~n));

            return currency.abrv + (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
        } else {
            return "Consulte";
        }
    }


    function init() {
        console.log("script kid");
    }

    return {
        init: init
    }

})();

LomadeeBalaoJS.init();