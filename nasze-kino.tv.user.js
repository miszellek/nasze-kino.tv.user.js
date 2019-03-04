// ==UserScript==
// @name         nasze-kino.tv
// @namespace    nasze-kino.tv
// @version      0.1
// @description  tools for nasze-kino.tv
// @author       miszel
// @match        https://www.nasze-kino.tv/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    window.onresize = function () {
        onResize();
    };

    window.onload = function () {
        onResize();
    };

    function onResize() {
        var inputGroup = document.querySelectorAll('div.captcha-info div.input-group')[0];
        var c;

        if (window.innerWidth < 768) {
            document.getElementById('single-poster').style.marginTop = '0';

            if (inputGroup) {
                inputGroup.style.margin = 'auto';
                for (c = 0; c < inputGroup.children.length; c++) {
                    inputGroup.children[c].style.display = 'table-row';
                }
            }

            document.querySelectorAll('div.captcha-info div.input-group-addon img')[0].style.width = '240px';
        } else {
            document.getElementById('single-poster').style.marginTop = null;

            if (inputGroup) {
                inputGroup.style.margin = null;
                for (c = 0; c < inputGroup.children.length; c++) {
                    inputGroup.children[c].style.display = null;
                }
            }

            document.querySelectorAll('div.captcha-info div.input-group-addon img')[0].style.width = null;
        }
    }

})();
