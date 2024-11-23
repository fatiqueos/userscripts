// ==UserScript==
// @name         youTube video player full center fix
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// ==/UserScript==

(function() {
    'use strict';

    const centerVideoPlayer = () => {
        const player = document.querySelector('#player-container-outer');
        const primary = document.querySelector('#primary');
        const secondary = document.querySelector('#secondary');

        if (player && primary) {
            primary.style.display = 'flex';
            primary.style.flexDirection = 'column';
            primary.style.alignItems = 'center';

            player.style.maxWidth = '1280px';
            player.style.margin = '0 auto';
            player.style.width = '100%';

            if (secondary) {
                secondary.style.display = 'none';
            }
        }
    };

    const observer = new MutationObserver(() => {
        if (document.querySelector('#player-container-outer') && document.querySelector('#primary')) {
            centerVideoPlayer();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    centerVideoPlayer();
})();
