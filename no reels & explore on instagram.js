// ==UserScript==
// @name         no reels & explore on instagram.js
// @version      1.0
// @match        https://www.instagram.com/*
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/fatiqueos/userscripts/refs/heads/main/no%20reels%20%26%20explore%20on%20instagram.js
// @downloadURL  https://raw.githubusercontent.com/fatiqueos/userscripts/refs/heads/main/no%20reels%20%26%20explore%20on%20instagram.js
// @author       fatiqueos
// @icon         https://www.bodurmedya.com/blog/wp-content/webp-express/webp-images/uploads/2023/10/image-15.png.webp
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
