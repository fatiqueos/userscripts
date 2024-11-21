// ==UserScript==
// @name         No Reels & Explore on Instagram
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        https://www.instagram.com/*
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/yourusername/yourrepository/master/scriptname.user.js
// @downloadURL  https://raw.githubusercontent.com/yourusername/yourrepository/master/scriptname.user.js
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        .x1iyjqo2.xh8yej3>div:nth-child(4)>span.x4k7w5x.x1h91t0o.x1h9r5lt.x1jfb8zj.xv2umb2.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1qrby5j {
            display: none !important;
        }
        .x1iyjqo2.xh8yej3>div:nth-child(3)>span.x4k7w5x.x1h91t0o.x1h9r5lt.x1jfb8zj.xv2umb2.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1qrby5j {
            display: none !important;
        }
    `);
})();
