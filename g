// ==UserScript==
// @name         Instagram Siyah Beyaz
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Instagram'ı siyah beyaz yapmak için stil değişikliği
// @author       You
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Siyah beyaz stilini ekleyelim
    const style = document.createElement('style');
    style.innerHTML = `
        body, .x1usm28, .x1cpgx5, .x1m1k0r, .x1sxyh6, .x1mn1t7, .x1r36u0, .x1mthb5, .x1bckeb, .x13vifvy,
        .x2p9w2v, .x2g6n0k, .xdpd8w8, .x3p2k5j, .xrt73u2, .x13a5hwg, .x1g51frz, .x5y9gbs, .xvq9zj1, .xw2xrd7,
        .x16v4m1w, .x1s54m66, .xovj2m6, .xjkvh9s, .x2nt7f7, .x3wv8l7, .x17v9h0v, .x18v6g4v, .x8tdd0yt, .x5w89d6,
        .xqvw8xk, .x1o0dxcs {
            filter: grayscale(100%) !important;
        }
        img, .x19gl4n {
            filter: grayscale(100%) !important;
        }
    `;
    document.head.appendChild(style);  // Stil başlığa ekleniyor

})();
