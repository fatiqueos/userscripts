// ==UserScript==
// @name         hide suggested followers on instagram
// @match        https://www.instagram.com/*
// ==/UserScript==

(function() {
    'use strict';

    const selectors = {
        suggestedFollowers: "a[href*='/explore/people/']",
    };

    const hideSuggestedFollowers = () => {
        const suggestedFollowersLinks = document.querySelectorAll(selectors.suggestedFollowers);
        suggestedFollowersLinks.forEach(link => {
            const suggestedFollowersTitle = link.closest("div");
            const suggestedFollowers = suggestedFollowersTitle?.nextElementSibling;
            if (suggestedFollowers) {
                suggestedFollowers.remove();
            }
            suggestedFollowersTitle?.remove();
        });
    };

    hideSuggestedFollowers();

    const observer = new MutationObserver(() => {
        hideSuggestedFollowers();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
