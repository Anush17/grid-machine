'use strict';
(function IIFE() {

    var board = {
        form: null,
        container: null,
        input: null
    };

    function init() {
        board.form = document.getElementById('form');
        board.container = document.getElementById('container');
        board.input = document.getElementById('input');
        bindEvents();
    }

    function bindEvents() {
        if (board.form.addEventListener) {
            board.form.addEventListener('submit', addGrid, false);
        } else if (board.form.attachEvent) {
            board.form.attachEvent('onsubmit', addGrid);
        }
    }

    function cleaner() {
        board.container.innerHTML = '';
        board.input.value = '';
    }

    function addGrid(e) {
        e.preventDefault();
        var parsedValue = parseInt(board.input.value);
        if (isNaN(parsedValue)) {
            alert('Please type number,Instead of string');
            return;
        }
        cleaner();
        for (var i = 0; i < parsedValue; i++) {
            var div = document.createElement('div');
            board.container.appendChild(div);
            div.className = 'row';
            for (var j = 0; j < parsedValue; j++) {
                div.innerHTML += "<div class='inRow'></div>"
            }
        }
    }

    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', function (e) {
        })
    } else {
        alert('DOM  not fully loaded and parsed');
    }
    init();
}());

