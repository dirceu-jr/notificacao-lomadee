var LomadeeBalaoJs = (function () {

    /*!
    * Morpheus - A Brilliant Animator
    * https://github.com/ded/morpheus - (c) Dustin Diaz 2011
    * License MIT
    */
    !function(e,t){typeof define=="function"?define(t):typeof module!="undefined"?module.exports=t():this[e]=t()}("morpheus",function(){function E(e,t,n){if(Array.prototype.indexOf)return e.indexOf(t);for(n=0;n<e.length;++n)if(e[n]===t)return n}function S(e){var t,n=w.length;s&&(e=i());for(t=n;t--;)w[t](e);w.length&&b(S)}function x(e){w.push(e)===1&&b(S)}function T(e){var t,n=E(w,e);n>=0&&(t=w.slice(n+1),w.length=n,w=w.concat(t))}function N(e,t){var n={},r;if(r=e.match(c))n.rotate=B(r[1],t?t.rotate:null);if(r=e.match(h))n.scale=B(r[1],t?t.scale:null);if(r=e.match(p))n.skewx=B(r[1],t?t.skewx:null),n.skewy=B(r[3],t?t.skewy:null);if(r=e.match(d))n.translatex=B(r[1],t?t.translatex:null),n.translatey=B(r[3],t?t.translatey:null);return n}function C(e){var t="";return"rotate"in e&&(t+="rotate("+e.rotate+"deg) "),"scale"in e&&(t+="scale("+e.scale+") "),"translatex"in e&&(t+="translate("+e.translatex+"px,"+e.translatey+"px) "),"skewx"in e&&(t+="skew("+e.skewx+"deg,"+e.skewy+"deg)"),t}function k(e,t,n){return"#"+(1<<24|e<<16|t<<8|n).toString(16).slice(1)}function L(e){var t=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);return(t?k(t[1],t[2],t[3]):e).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}function A(e){return e.replace(/-(.)/g,function(e,t){return t.toUpperCase()})}function O(e){return typeof e=="function"}function M(e){return Math.sin(e*Math.PI/2)}function _(e,t,n,r,s,o){function d(e){var i=e-c;if(i>a||h)return o=isFinite(o)?o:1,h?p&&t(o):t(o),T(d),n&&n.apply(f);isFinite(o)?t(l*r(i/a)+s):t(r(i/a))}r=O(r)?r:j.easings[r]||M;var a=e||u,f=this,l=o-s,c=i(),h=0,p=0;return x(d),{stop:function(e){h=1,p=e,e||(n=null)}}}function D(e,t){var n=e.length,r=[],i,s;for(i=0;i<n;++i)r[i]=[e[i][0],e[i][1]];for(s=1;s<n;++s)for(i=0;i<n-s;++i)r[i][0]=(1-t)*r[i][0]+t*r[parseInt(i+1,10)][0],r[i][1]=(1-t)*r[i][1]+t*r[parseInt(i+1,10)][1];return[r[0][0],r[0][1]]}function P(e,t,n){var r=[],i,s,o,u;for(i=0;i<6;i++)o=Math.min(15,parseInt(t.charAt(i),16)),u=Math.min(15,parseInt(n.charAt(i),16)),s=Math.floor((u-o)*e+o),s=s>15?15:s<0?0:s,r[i]=s.toString(16);return"#"+r.join("")}function H(e,t,n,r,i,s,o){if(i=="transform"){o={};for(var a in n[s][i])o[a]=a in r[s][i]?Math.round(((r[s][i][a]-n[s][i][a])*e+n[s][i][a])*u)/u:n[s][i][a];return o}return typeof n[s][i]=="string"?P(e,n[s][i],r[s][i]):(o=Math.round(((r[s][i]-n[s][i])*e+n[s][i])*u)/u,i in v||(o+=t[s][i]||"px"),o)}function B(e,t,n,r,i){return(n=f.exec(e))?(i=parseFloat(n[2]))&&t+(n[1]=="+"?1:-1)*i:parseFloat(e)}function j(e,t){var n=e?n=isFinite(e.length)?e:[e]:[],r,i=t.complete,s=t.duration,o=t.easing,u=t.bezier,f=[],c=[],h=[],p=[],d,v;u&&(d=t.left,v=t.top,delete t.right,delete t.bottom,delete t.left,delete t.top);for(r=n.length;r--;){f[r]={},c[r]={},h[r]={};if(u){var b=y(n[r],"left"),w=y(n[r],"top"),E=[B(O(d)?d(n[r]):d||0,parseFloat(b)),B(O(v)?v(n[r]):v||0,parseFloat(w))];p[r]=O(u)?u(n[r],E):u,p[r].push(E),p[r].unshift([parseInt(b,10),parseInt(w,10)])}for(var S in t){switch(S){case"complete":case"duration":case"easing":case"bezier":continue}var x=y(n[r],S),T,k=O(t[S])?t[S](n[r]):t[S];if(typeof k=="string"&&a.test(k)&&!a.test(x)){delete t[S];continue}f[r][S]=S=="transform"?N(x):typeof k=="string"&&a.test(k)?L(x).slice(1):parseFloat(x),c[r][S]=S=="transform"?N(k,f[r][S]):typeof k=="string"&&k.charAt(0)=="#"?L(k).slice(1):B(k,parseFloat(x)),typeof k=="string"&&(T=k.match(l))&&(h[r][S]=T[1])}}return _.apply(n,[s,function(e,i,s){for(r=n.length;r--;){u&&(s=D(p[r],e),n[r].style.left=s[0]+"px",n[r].style.top=s[1]+"px");for(var o in t)i=H(e,h,f,c,o,r),o=="transform"?n[r].style[m]=C(i):o=="opacity"&&!g?n[r].style.filter="alpha(opacity="+i*100+")":n[r].style[A(o)]=i}},i,o])}var e=document,t=window,n=t.performance,r=n&&(n.now||n.webkitNow||n.msNow||n.mozNow),i=r?function(){return r.call(n)}:function(){return+(new Date)},s=!1,o=e.documentElement,u=1e3,a=/^rgb\(|#/,f=/^([+\-])=([\d\.]+)/,l=/^(?:[\+\-]=?)?\d+(?:\.\d+)?(%|in|cm|mm|em|ex|pt|pc|px)$/,c=/rotate\(((?:[+\-]=)?([\-\d\.]+))deg\)/,h=/scale\(((?:[+\-]=)?([\d\.]+))\)/,p=/skew\(((?:[+\-]=)?([\-\d\.]+))deg, ?((?:[+\-]=)?([\-\d\.]+))deg\)/,d=/translate\(((?:[+\-]=)?([\-\d\.]+))px, ?((?:[+\-]=)?([\-\d\.]+))px\)/,v={lineHeight:1,zoom:1,zIndex:1,opacity:1,transform:1},m=function(){var t=e.createElement("a").style,n=["webkitTransform","MozTransform","OTransform","msTransform","Transform"],r;for(r=0;r<n.length;r++)if(n[r]in t)return n[r]}(),g=function(){return typeof e.createElement("a").style.opacity!="undefined"}(),y=e.defaultView&&e.defaultView.getComputedStyle?function(t,n){n=n=="transform"?m:n,n=A(n);var r=null,i=e.defaultView.getComputedStyle(t,"");return i&&(r=i[n]),t.style[n]||r}:o.currentStyle?function(e,t){t=A(t);if(t=="opacity"){var n=100;try{n=e.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(r){try{n=e.filters("alpha").opacity}catch(i){}}return n/100}var s=e.currentStyle?e.currentStyle[t]:null;return e.style[t]||s}:function(e,t){return e.style[A(t)]},b=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||t.oRequestAnimationFrame||function(e){t.setTimeout(function(){e(+(new Date))},17)}}();b(function(e){s=e>1e12!=i()>1e12});var w=[];return j.tween=_,j.getStyle=y,j.bezier=D,j.transform=m,j.parseTransform=N,j.formatTransform=C,j.animationFrame=b,j.easings={},j});

    var
        app_id = "155001196902309c5f761",
        currency_map = {
            "BRL": {
                abrv: "R$ ",
                cents: 2,
                mi: ".",
                cent: ","
            }
        },
        document_body = document.body,
        document_element = document.documentElement,
        iframe = undefined
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


    function viewPortHeight() {
        return window.innerHeight ||
               document_element.clientHeight ||
               document_body.clientHeight
        ;
    }


    function documentHeight() {
        return Math.max(
            document_body.scrollHeight,
            document_element.scrollHeight,
            document_body.offsetHeight,
            document_element.offsetHeight
        );
    }


    function toffset2() {
        return Math.max(
            (window.pageYOffset ? window.pageYOffset : 0),
            document_element.scrollTop,
            document_body.scrollTop
        );
    }


    function toggle(click) {
        var
            open = iframe.style.bottom == "0px",
            opened = open ? 0 : 1
        ;

        iframe.setAttribute('data-opened', opened);

        // animation
        morpheus(iframe, {
            bottom: open ? -100 : 0,
            duration: 200
        });
    }


    function render(options) {
        // options['sourceId'];
        
        var css = "<style type='text/css'>body {  margin: 0;  font: 13px Arial, Helvetica, sans-serif}h2,form,input,strong,a,ul,li {  padding: 0;  margin: 0;  border: 0;  vertical-align: baseline;  font-style: normal}.hide {  display: none}li {  list-style-type: none}a,a:hover {  text-decoration: none}.search a,a.next,a.next:hover,a.previous,.previous:hover,.NextBlock,.PreviousBlock {  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAABcCAYAAACBQP4yAAADcklEQVRYw+2WfWhNYRzHz52ZlzIXi2xJKEZermkmUZMoJa/NH/7a/KOkFJFS7p2UvNQKJVKbSLn3L0Xk/ZbmDzQ1rpekzVAkdxpj3q7vj+/Vs2fnnD07d7Pddn/1qXuec873/p7f83s5vnA4bBnYCDAOxEGTeqOsrKzDw9nadRYYC+aBBaAIFII8Ct4Cd0ENeOvkgS46H+wGS2yeHQXWguVgDTgIzoPvlo1nSVsKwg6C8uJP/h4E5oK9YH0kEvE5eToDnAajlXsxcAPcB7kMx1QwnfcnU/ghn2nnaQ7YrggmKLYJBMFZcBisAxvBRT4nHhaAPfB2sC46HqxW1h6DDSAKPoBvyr1asBncAb8ovAzM1EUXgyHK2i7Q6JJeDeAUeKd4XKKLzuGWLaZJg0HeisdPlespumhcObBn4KuB6CctlSbqoo+Uaz8YZiD6hRljMbatumidcp2vB93BilgMSY1aNV9l4Tn4zOuRYAtL1cmkB+xUQtYGrumeiutXWDE+busYWKSJ5fBA9oGFyrqUahMaS0KvqENgmnKKK/n7OnjDziT3pSVN0v6sngfXoUwlRfaz7PK5VkhamHK5DuGoYBqesWso5/iAGmOL2ZDrEmNJpwM4qBI70VbWfLE8BG5za23M3QYeSBV4qQnLwR6H8J/Q+Fw6v3g4iyXcRNFkYUhsj4Ax2jsXwLZsl2210Fs7i4AJ7G55yro08EtZlnc7AY7arK/ITkG0GZwEw9k6pdwfgMupiIq9BjuQ+Fvb5WksFjN52XFEB4PBH/rD/WhEV1ZWptGIhreZEd1etJ+NaDVf+/aIRmPpzyMaB/WvAAaUlpaqnaiR1SKNdyD4yDST61fgHmNYwDGi/nFxNBq9Cr24LxQKOXngeUSrnuomjUQ+Gl6A9/RWbYsSutlgqLIu7fBJ+oxoXyKRsLrbsqwesIxo74hWsaEI1UaqklKdoFt1Z+94ERWrA36nd0y2X2GzFgA32cE8bV9YBeKmHpuKCgEXYc+iQrlDjPuOp90e0/KuplWv5aluNZxNzamUaXVXSlTIjJOMaEa0N0VlRCfHdVUqtW/XA2w7fhKT71M/J2egu7bvJljhZft+NmPd4hwvnr5QnAQDqXz22Fm5yaH+d097JKZuwq6hMEl6N2HPI7rZ+juSa4yLuYsfaEbjOjOi00T0N5jPKosL9CHyAAAAAElFTkSuQmCC);}.Widget350x130 {  text-shadow: #fff 0 1px 0;  background: #fff;  border: 1px solid #ddd;  border-top: 3px solid #FC3;  font: 13px Arial, Helvetica, sans-serif;  position: relative;  color: #aaa;  float: left}.header {  position: absolute;  top: 7px;  left: 10px}.tabs {  float: right}.tabs li {  float: left}.tabs a,.current {  -moz-border-radius: 4px 4px 0 0;  border-top-left-radius: 4px;  border-top-right-radius: 4px;  height: 24px;  border: 1px solid #ddd;  text-align: center;  padding: 6px 0 0 0;  font-weight: bold;  color: #aaa;  float: left}.tabs a {  background: #f5f5f5}.tabs a:hover {  background: #f9f9f9}.current {  background: #fff;  color: #808080}.search {  position: relative;  float: left}.search>a {  width: 21px;  height: 23px;  text-indent: -9999px;  outline: 0;  position: absolute;  top: 4px;  right: 5px;  float: right}.search>a:hover {  background-position: 0 -23px}input[type=\"text\"] {  height: 30px;  border: 1px solid #ddd;  padding: 0 7px 0 7px;  margin: 0 0 11px 0;  vertical-align: middle;  line-height: 30px;  color: #aaa}input:focus {  border: 1px solid #808080}.suggestion {  position: absolute;  top: 32px;  left: 0;  font-size: 11px;  float: left;  z-index: 1}.suggestion a {  height: 18px;  background: #f5f5f5;  border: 1px solid #808080;  margin: -1px 0 0 0;  padding: 5px 8px 0 8px;  color: #808080;  float: left}.suggestion .hover {  background: #fcfcfc}.offers {  width: 100%;  float: left}.loading {  opacity: .5}.thumb {  width: 120px;  height: 100px;  border: 1px solid #eee;  display: block;  margin: auto}.offers li {  cursor: pointer;  cursor: hand;  display: none;  text-align: center;  float: left}.offers li.active {  display: block}.offers li.unic {  width: 100%}h2 {  font-size: 13px;  margin: 10px 0 10px 0;  font-weight: bold;  color: #000}h2 em {  color: #808080;  font-style: normal}.Widget350x130 h2 {  margin: 7px 0 3px 0}.price {  width: 100%;  margin: 0;  font-size: 22px;  font-weight: bold;  text-align: center;  color: #3C69E4;  display: block}.Widget350x130 .price {  width: 223px;  float: left}.parcelas {  font-weight: bold;  font-size: 14px;  color: #808080}.parcelas em {  font-style: normal;  font-size: 13px}.footer {  border-top: 1px solid #ddd;  background: #f9f9f9;  position: absolute;  padding: 5px 10px 5px 10px;  text-align: center;  bottom: 0;  left: 0}.Widget350x130 .footer {  width: 327px}.footer p {  font-size: 11px;  margin: 0;  color: #aaa}.footer p a {  color: #aaa}.footer p a:hover {  color: #808080}.footer span a,.NextBlock,.PreviousBlock {  width: 23px;  height: 18px;  text-align: center;  padding: 5px 0 0 0;  margin: 0 0 0 7px;  text-indent: -9999px;  outline: 0;  float: right}.next {  background-color: #aaa;  background-position: 0 -46px}.next:hover {  background-color: #888;  background-position: 0 -46px}.previous {  background-color: #aaa;  background-position: 0 -69px}.previous:hover {  background-color: #888;  background-position: 0 -69px}.NextBlock {  background-color: #ddd;  background-position: 0 -46px}.PreviousBlock {  background-color: #ddd;  background-position: 0 -69px}.goNext {  background-color: #fc3}.goNext:hover {  background-color: #eeaf00}.Widget350x130 {  width: 330px;  height: 123px;  border-left: 3px solid #ddd;  border-right: 3px solid #ddd;  border-bottom: 0;  padding: 7px 7px 0 7px}.Widget350x130 h2 {  margin-bottom: 7px}.Widget350x130 .thumb {  width: 100px;  height: 83px !important;  text-align: center;  margin: 0 10px 0 0;  float: left}.Widget350x130 .thumb img {  max-width: 100px;  max-height: 83px;  border: 0}.Widget350x130 span {  text-align: left}.Widget350x130 .offers {  position: relative}.Widget350x130 a.close {  position: absolute;  top: -27px;  right: 0;  font-size: 11px;  color: #aaa}.Widget350x130 .footer {  border-top: 1px solid #ddd !important;  background: 0;  padding: 7px 0 0 0;  bottom: 7px;  left: 10px;  text-align: left;  height: 24px}.Widget350x130 .footer span a,.Widget350x130 .NextBlock,.Widget350x130 .PreviousBlock {  margin-top: -15px}</style>";


            var body = [
                '<div class="Widget350x130" id="all_holder">',
                    '<div id="offers-">',
                        '<ul class="offers" id="offers-0">',
                            '<li class="unic active">ad</li>',
                        '</ul>',
                    '</div>',
                    '<div class="footer">',
                        '<div id="paginations-">',
                            '<span class="pagination" id="pagination-0"></span>',
                        '</div>',
                    '</div>',
                '</div>'
                ].join('');

        iframe = document.createElement('iframe');

        iframe.style = [
            "width: 300px;",
            "height: 130px;",
            "position: fixed;",
            "right: 32px;",
            "bottom: -100px;",
            "z-index: 9000;",
            "border-radius: 8px 8px 0 0;",
            "box-shadow: 0 1px 4px rgba(0, 0, 0, .3);"
        ].join('');

        iframe.allowTransparency = "true";
        iframe.scrolling = "no";
        iframe.frameBorder = "0";
        iframe.frameborder = "0";
        iframe.marginwidth = "0";
        iframe.marginheight = "0";

        document_body.appendChild(iframe);
        
        var html = '<body>' + css + body + '</body>';
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();

        iframe.contentWindow.document.body.addEventListener("click", function() {
            var opened = parseInt(iframe.getAttribute('data-opened'));
            if (opened !== 1) {
                toggle();
            }
        });

        window.addEventListener("scroll", function() {
            var
                scroll_percent = Math.floor(((viewPortHeight() + toffset2()) / documentHeight()) * 100),
                opened = parseInt(iframe.getAttribute('data-opened'))
            ;

            if (scroll_percent > 60 && opened !== 1) {
                toggle();
            }
        });

    }

    return {
        render: render
    }

})();

if (typeof _LomadeeBalaoJS == 'object') {
    LomadeeBalaoJs.render(_LomadeeBalaoJS);
}