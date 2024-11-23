// ==UserScript==
// @name         anonymous story viewer
// @match        *://www.instagram.com/*
// @include      *://www.instagram.com/*
// ==/UserScript==

(function() {
    var originalXMLSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function() {
        if (typeof arguments[0] === "string" && arguments[0].includes("viewSeenAt")) {t
        } else {
            originalXMLSend.apply(this, arguments);
        }
    };
})();
