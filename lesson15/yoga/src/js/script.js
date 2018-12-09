window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tabs = require('./parts/tabs'),
        calc = require('./parts/calc.js'),
        slider = require('./parts/slider.js'),
        modal = require('./parts/modal.js'),
        timer = require('./parts/timer'),
        smoothScrolling = require('./parts/smoothScrolling.js');


        tabs();
        smoothScrolling();
        calc();
        slider();
        timer();
        modal();
});